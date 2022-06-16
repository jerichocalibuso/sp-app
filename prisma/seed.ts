import {
  Category,
  PaymentOption,
  PrismaClient,
  Product,
  Role,
  Status,
  User,
} from '@prisma/client'
export const db = new PrismaClient()

async function seed() {
  await db.address.deleteMany()
  await db.feedback.deleteMany()
  await db.order.deleteMany()
  await db.orderItem.deleteMany()
  await db.product.deleteMany()
  await db.user.deleteMany()
  const products = getProducts()
  await db.product.createMany({ data: products })
  const users = getUsers()
  await db.user.createMany({ data: users })
  const product = await db.product.findFirst({})
  const ordersData = getOrders()
  await db.order.createMany({
    data: ordersData,
  })

  const orders = await db.order.findMany({})
  orders.map(async (order) => {
    await db.orderItem.create({
      data: {
        orderId: order.id,
        productId: product?.id || '',
        quantity: 10,
      },
    })
  })

  const user = await db.user.findFirst({
    where: {
      username: 'jericho_customer',
    },
  })

  const feedbacks = getFeedbacks(user?.id || '')
  await db.feedback.createMany({
    data: feedbacks,
  })
}

seed()

function getProducts() {
  return [
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973445/sp-app/hbbg2jsla6fqqplhuf3o.jpg',
      name: 'Chicken Leg Quarters',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 860,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973471/sp-app/j9hknh7tv1nk787tnuff.jpg',
      name: 'Chicken Nuggets',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 200,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973490/sp-app/uxqb8qjemb4vzzlrotth.jpg',
      name: 'Chicken Popcorn',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 200,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973520/sp-app/htqrrld1v6w9vg71g9o7.jpg',
      name: 'Chicken Sticks',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 200,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973555/sp-app/uvylunfduucz7uzh49fg.jpg',
      name: 'Chicken Thighs',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 860,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973023/sp-app/qkculxtifdjsfwhrkwcd.jpg',
      name: 'Chicken Breaded Skin',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 350,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973235/sp-app/f3xu2zefqvfmnuibhp1j.jpg',
      name: 'Chicken Breasts Fillets',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 860,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973340/sp-app/rjdpmrnaxmnei7q8h4ba.jpg',
      name: 'Chicken Breasts',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 860,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973588/sp-app/h8vfviojspu1c91iyrd9.jpg',
      name: 'Chicken Wings',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 860,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973641/sp-app/w45u4suxwr11lih6lttf.jpg',
      name: 'Chicken Drumsticks',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 860,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974021/sp-app/ljpgmaw0ovzgk8lpnvef.jpg',
      name: 'Marinated Chicken Cut Ups (Spicy)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 550,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973920/sp-app/evsavmffpghuzekzesrm.jpg',
      name: 'Everyday Chicken',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 1000,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973967/sp-app/fpwpd9dyvaelew1agttz.jpg',
      name: 'Family Feast Chicken',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 1250,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653973989/sp-app/z2c8zgmag1cgv2xs5noq.jpg',
      name: 'Marinated Chicken Cut Ups (Pepper)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 550,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974055/sp-app/xtejntaq4et7hsn0h63h.jpg',
      name: 'Marinated Chicken Cut Ups (Sweet)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 550,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974084/sp-app/k9iids908jhethebansk.jpg',
      name: 'Marinated Chicken Neck',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974108/sp-app/pencw0gldsmgaysxpmpx.jpg',
      name: 'Premium Chicken',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 1000,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974137/sp-app/rglssqjwxhcxcytxu3np.jpg',
      name: 'Saucy Torikaraage (Sweet and Sour)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 450,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974195/sp-app/tupqntahgg19iwavbosn.jpg',
      name: 'Saucy Torikaraage (Terriyaki)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 450,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974216/sp-app/ppuuixchmx0t5xo1c0f2.jpg',
      name: 'Chicken Thigh Fillets',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 860,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974251/sp-app/no9expeeaw1vrwbvbr50.jpg',
      name: 'Top Toriburger (Cheese and Chives)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 450,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974277/sp-app/ttyudcnkp4cg6b3robbn.jpg',
      name: 'Top Toriburger (Classic Mayo)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 450,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975209/sp-app/ho9ymtau7pgnogrwmkih.jpg',
      name: 'Beef Shanks',
      category: Category.BEEF,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974319/sp-app/b0e9wtqmpbqup9ieesa0.jpg',
      name: 'Young and Tender Chicken',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 1000,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653974303/sp-app/golnhuqsfixoltenq8h9.jpg',
      name: 'Top Torikatsu (Cheese and Chives)',
      category: Category.CHICKEN,
      brand: 'Bounty Fresh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 450,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975138/sp-app/pxadtebekpegqffrdxh6.jpg',
      name: 'Beef Cubes',
      category: Category.BEEF,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975159/sp-app/tabyvdfbeas0ilehqo7r.jpg',
      name: 'Beef New York Steak',
      category: Category.BEEF,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975180/sp-app/juyfcu13zv5ak3doqtcp.jpg',
      name: 'Beef Sakiyuki',
      category: Category.BEEF,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975370/sp-app/bztcppm1l2mx4tfhuupt.jpg',
      name: 'Beef Strongranoff',
      category: Category.BEEF,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975392/sp-app/q8ghbdigwx3lb815xjjq.jpg',
      name: 'Ground Beef',
      category: Category.BEEF,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975426/sp-app/vrxolzfjfez3u4iqvxlu.jpg',
      name: 'Ground Pork',
      category: Category.PORK,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975450/sp-app/zqnidhqj2tckslmrq7nq.jpg',
      name: 'Pata Slice',
      category: Category.PORK,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975477/sp-app/pbgqbpcyppr2mnfuvmkf.jpg',
      name: 'Pork Adobo Cut',
      category: Category.PORK,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975497/sp-app/mzkq8xcrw2ttry7lxmhj.jpg',
      name: 'Pork Bacon Cut',
      category: Category.PORK,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975517/sp-app/xsodxazslk38mbmhb5gf.jpg',
      name: 'Pork Belly Slice',
      category: Category.PORK,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975535/sp-app/uicmpvdzx2abquqtcml3.jpg',
      name: 'Pork Sinigang Cut',
      category: Category.PORK,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/jerichocalibuso/image/upload/v1653975565/sp-app/qnr3nggn5pqb5rrei34u.jpg',
      name: 'Pork Chop',
      category: Category.PORK,
      brand: 'Camille',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
      price: 100,
      stock: 100,
      weight: 500,
    },
  ]
}

function getUsers() {
  return [
    {
      name: 'Jericho Customer',
      username: 'jericho_customer',
      password: '$2a$10$HKZoVmGdI.Hl6WAHRt2EheOHtI5vkUSpcTyx0RcvVT6/Cwhpagt6m',
      role: Role.CUSTOMER,
    },
    {
      name: 'Jericho Rider One',
      username: 'jericho_rider1',
      password: '$2a$10$HKZoVmGdI.Hl6WAHRt2EheOHtI5vkUSpcTyx0RcvVT6/Cwhpagt6m',
      role: Role.RIDER,
    },
    {
      name: 'Jericho Rider Two',
      username: 'jericho_rider2',
      password: '$2a$10$HKZoVmGdI.Hl6WAHRt2EheOHtI5vkUSpcTyx0RcvVT6/Cwhpagt6m',
      role: Role.RIDER,
    },
    {
      name: 'Jericho Admin',
      username: 'jericho_admin',
      password: '$2a$10$HKZoVmGdI.Hl6WAHRt2EheOHtI5vkUSpcTyx0RcvVT6/Cwhpagt6m',
      role: Role.ADMIN,
    },
    {
      name: 'Sir JM Admin',
      username: 'sirjm_admin',
      password: '$2a$10$HKZoVmGdI.Hl6WAHRt2EheOHtI5vkUSpcTyx0RcvVT6/Cwhpagt6m',
      role: Role.ADMIN,
    },
  ]
}

function getOrders() {
  return [
    {
      amount: 5000,
      status: Status.COMPLETED,
      paidAt: new Date('01/02/2022'),
      createdAt: new Date('01/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 6000,
      status: Status.COMPLETED,
      paidAt: new Date('02/02/2022'),
      createdAt: new Date('02/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 4000,
      status: Status.COMPLETED,
      paidAt: new Date('03/02/2022'),
      createdAt: new Date('03/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 3000,
      status: Status.COMPLETED,
      paidAt: new Date('04/02/2022'),
      createdAt: new Date('04/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },

    {
      amount: 2000,
      status: Status.CANCELLED,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.IN_CART,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.CANCELLED,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.IN_CART,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('06/02/2022'),
      createdAt: new Date('06/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('06/02/2022'),
      createdAt: new Date('06/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('06/02/2022'),
      createdAt: new Date('06/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('06/02/2022'),
      createdAt: new Date('06/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.COMPLETED,
      paidAt: new Date('06/02/2022'),
      createdAt: new Date('06/02/2022'),
      paymentOption: PaymentOption.COD,
    },

    {
      amount: 2000,
      status: Status.CANCELLED,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
    {
      amount: 2000,
      status: Status.IN_CART,
      paidAt: new Date('05/02/2022'),
      createdAt: new Date('05/02/2022'),
      paymentOption: PaymentOption.COD,
    },
  ]
}

function getFeedbacks(userId: string) {
  return [
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
    {
      userId,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
    },
  ]
}
