ALTER TABLE "Countdown" ADD COLUMN "title" TEXT NOT NULL DEFAULT '未命名倒计时';

-- 移除默认值约束
ALTER TABLE "Countdown" ALTER COLUMN "title" DROP DEFAULT;
