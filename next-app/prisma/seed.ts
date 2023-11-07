// schema.prismaのUserテーブルにデフォルトユーザを作成する
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      id: "default_user", // デフォルトユーザーID
      name: "Alice",
      email: "alice@prisma.io",
      emailVerified: null, // emailVerifiedフィールドがNULLを許容している場合
      image: null, // imageフィールドがNULLを許容している場合
      // 他の必要なデータをここに記述します
    },
  })

  console.log({ user })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
