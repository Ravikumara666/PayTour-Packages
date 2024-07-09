const express = require('express');
const stripe = require('stripe')('sk_test_51PVEJzRubgkgcMPJWGlvtQ3rZO51NbAFti8tpko8J1xSUwQby9dEBTMqYl3BQgDhfXZGWjnTR1z3VQ7DqFW03j2o00b2jaN52e'); // Replace with your Stripe secret key
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
    const { totalPrice, selectedPackage } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: `Package: ${selectedPackage}`,
                        },
                        unit_amount: totalPrice*100, // Convert to cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
