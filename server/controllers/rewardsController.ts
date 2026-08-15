import { Request, Response } from 'express';
import { db, RedemptionRecord } from '../config/db.js';

export const getRewards = (req: Request, res: Response) => {
  try {
    const rewards = db.get('rewards');
    return res.json({ success: true, data: rewards });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const redeemReward = async (req: Request, res: Response) => {
  try {
    const { rewardId, userId = 'usr-demo-1' } = req.body;

    if (!rewardId) {
      return res.status(400).json({ success: false, message: 'rewardId is required' });
    }

    const rewards = db.get('rewards');
    const reward = rewards.find((r) => r.id === rewardId);
    if (!reward) {
      return res.status(404).json({ success: false, message: 'Reward not found' });
    }

    const users = db.get('users');
    let user = users.find((u) => u.id === userId);

    if (!user) {
      user = users[0]; // fallback to demo user
    }

    if (user.cirqlCoins < reward.coinsCost) {
      return res.status(400).json({
        success: false,
        message: `Insufficient Cirql Coins. You have ${user.cirqlCoins} coins but need ${reward.coinsCost} coins.`,
      });
    }

    user.cirqlCoins -= reward.coinsCost;
    if (reward.title.includes('Tree')) {
      user.treesPlanted += 5;
    }
    db.set('users', users);

    const couponCode = `CQ-${reward.partner.substring(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const newRedemption: RedemptionRecord = {
      id: `red-${Date.now()}`,
      userId: user.id,
      rewardId: reward.id,
      rewardTitle: reward.title,
      coinsSpent: reward.coinsCost,
      code: couponCode,
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    const redemptions = db.get('redemptions');
    redemptions.unshift(newRedemption);
    db.set('redemptions', redemptions);

    return res.json({
      success: true,
      message: `Successfully redeemed ${reward.title}!`,
      data: {
        redemption: newRedemption,
        remainingCoins: user.cirqlCoins,
        treesPlanted: user.treesPlanted,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
