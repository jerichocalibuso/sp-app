const createPaymentIntent = async () => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.PAYMONGO_SECRET_KEY_BASE64}`,
    },
    body: JSON.stringify({
      data: {
        attributes: {
          amount: 10000,
          payment_method_allowed: ['card'],
          payment_method_options: { card: { request_three_d_secure: 'any' } },
          currency: 'PHP',
          capture_type: 'automatic',
          statement_descriptor: 'Camille Meat Shop',
          description: 'Camille Meat Shop',
        },
      },
    }),
  }

  const res = await fetch(
    'https://api.paymongo.com/v1/payment_intents',
    options
  )
  const data = await res.json()
  console.log(`data: ${JSON.stringify(data, null, 2)}`)
  return data
}

const createPaymentMethod = async ({
  cardNumber,
  nameOnCard,
  expiration,
  cvc,
  amount,
}: PayCardArgs) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.PAYMONGO_SECRET_KEY_BASE64}`,
    },
    body: JSON.stringify({
      data: {
        attributes: {
          type: 'card',
          amount: amount * 100,
          payment_method_allowed: ['card'],
          payment_method_options: { card: { request_three_d_secure: 'any' } },
          currency: 'PHP',
          capture_type: 'automatic',
          statement_descriptor: 'Camille Meat Shop',
          description: 'Camille Meat Shop',
          details: {
            card_number: cardNumber,
            exp_month: parseInt(expiration.split('/')[0]) || 12,
            exp_year: parseInt(expiration.split('/')[1]) || 2022,
            cvc: cvc,
          },
          billing: { name: nameOnCard, email: 'jerichocalibuso@gmail.com' },
        },
      },
    }),
  }

  const res = await fetch(
    'https://api.paymongo.com/v1/payment_methods',
    options
  )
  const data = await res.json()
  return data
}

const attachPaymentIntent = async (
  paymentIntentId: string,
  paymentMethodId: string,
  clientKey: string
) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.PAYMONGO_SECRET_KEY_BASE64}`,
    },
    body: JSON.stringify({
      data: {
        attributes: {
          payment_method: `${paymentMethodId}`,
          client_key: `${clientKey}`,
        },
      },
    }),
  }

  const res = await fetch(
    `https://api.paymongo.com/v1/payment_intents/${paymentIntentId}/attach`,
    options
  )
  const data = await res.json()
  return data
}

export interface PayCardArgs {
  cardNumber: string
  nameOnCard: string
  expiration: string
  cvc: string
  amount: number
}

export const payCard = async ({
  cardNumber,
  nameOnCard,
  expiration,
  cvc,
  amount,
}: PayCardArgs) => {
  const { data: paymentMethodData, errors: paymentMethodErrors } =
    await createPaymentMethod({
      cardNumber,
      nameOnCard,
      expiration,
      cvc,
      amount,
    })

  const { data: paymentIntentData, errors: paymentIntentErrors } =
    await createPaymentIntent()

  if (paymentMethodErrors?.length || paymentIntentErrors?.length) {
    let errors: any[] = []
    paymentMethodErrors.forEach(
      (error: any) => error?.detail && errors.push(error.detail)
    )
    paymentIntentErrors.forEach(
      (error: any) => error?.detail && errors.push(error.detail)
    )
    console.log(`errors: ${JSON.stringify(errors, null, 2)}`)

    return { errors }
  }

  const clientKey = paymentIntentData.attributes.client_key
  const paymentMethodId = paymentMethodData.id
  const paymentIntentId = paymentIntentData.id

  const {
    data: paymentIntentAttachmentData,
    errors: paymentIntentAttachmentErrors,
  } = await attachPaymentIntent(paymentIntentId, paymentMethodId, clientKey)

  if (paymentIntentAttachmentErrors?.length) {
    let errors: any[] = []
    paymentIntentAttachmentErrors.forEach(
      (error: any) => error?.detail && errors.push(error.detail)
    )
    return { errors }
  }

  const paymentReference = paymentIntentAttachmentData.attributes.payments[0].id
  return { paymentReference }
}

const createSource = async (type: string, orderId: string, amount: number) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic c2tfdGVzdF9QTFN4elZOWUU4cHRGOTJERjVLVTl2VWc6',
    },
    body: JSON.stringify({
      data: {
        attributes: {
          amount: amount * 100,
          redirect: {
            success: `http://localhost:3000/order-success/${orderId}`,
            failed: 'http://localhost:3000/checkout?paymentFailed=true',
          },
          type: type,
          currency: 'PHP',
        },
      },
    }),
  }
  const res = await fetch('https://api.paymongo.com/v1/sources', options)
  const data = await res.json()
  return data
}

export const createPayment = async (
  sourceId: string,
  amount: number
): Promise<string> => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic c2tfdGVzdF9QTFN4elZOWUU4cHRGOTJERjVLVTl2VWc6',
    },
    body: JSON.stringify({
      data: {
        attributes: {
          amount: amount * 100,
          source: { id: sourceId, type: 'source' },
          description: 'Camille Meat Shop',
          currency: 'PHP',
        },
      },
    }),
  }

  const res = await fetch('https://api.paymongo.com/v1/payments', options)
  const { data } = await res.json()

  return data.id || ''
}

interface CreateSourceArgs {
  amount: number
  orderId: string
}

export const createGCashSource = async ({
  orderId,
  amount,
}: CreateSourceArgs) => {
  const { data: sourceData, errors: sourceErrors } = await createSource(
    'gcash',
    orderId,
    amount
  )

  if (sourceErrors?.length) {
    let errors: any[] = []
    sourceErrors.forEach(
      (error: any) => error?.detail && errors.push(error.detail)
    )
    return { errors }
  }

  return {
    checkoutUrl: sourceData.attributes.redirect.checkout_url,
    sourceId: sourceData.id,
  }
}

export const retrieveSource = async (sourceId: string) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Basic c2tfdGVzdF9QTFN4elZOWUU4cHRGOTJERjVLVTl2VWc6',
    },
  }
  const res = await fetch(
    `https://api.paymongo.com/v1/sources/${sourceId}`,
    options
  )
  const { data: sourceData } = await res.json()
  return {
    status: sourceData.attributes.status,
    checkoutUrl: sourceData.attributes.redirect.checkout_url,
  }
}
