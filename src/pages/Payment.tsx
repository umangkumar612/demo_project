import PaymentDemo from '../components/PaymentDemo';
import { Shield, Lock, CreditCard } from 'lucide-react';

export default function Payment() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Secure Payment Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our seamless payment processing system. This is a
            demonstration only - no real transactions will be made.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <PaymentDemo />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our Payment System?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our payment processing system is built with security,
                  reliability, and user experience in mind. We provide
                  enterprise-grade solutions for businesses of all sizes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Bank-Level Security
                    </h3>
                    <p className="text-gray-600">
                      256-bit SSL encryption and PCI DSS compliance ensure your
                      transactions are always secure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Fraud Protection
                    </h3>
                    <p className="text-gray-600">
                      Advanced fraud detection and prevention systems protect
                      both you and your customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Multiple Payment Methods
                    </h3>
                    <p className="text-gray-600">
                      Accept all major credit cards, debit cards, and digital
                      wallets for maximum flexibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Supported Payment Methods
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {['Visa', 'Mastercard', 'Amex', 'Discover'].map((brand) => (
                    <div
                      key={brand}
                      className="bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is this a real payment form?
              </h3>
              <p className="text-gray-600">
                No, this is a demonstration payment form. No real transactions
                will be processed, and no card information will be stored or
                transmitted.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How long does payment processing take?
              </h3>
              <p className="text-gray-600">
                In a production environment, most payments are processed within
                2-3 seconds, with instant confirmation to the user.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What currencies are supported?
              </h3>
              <p className="text-gray-600">
                Our payment system supports over 135 currencies, allowing you to
                accept payments from customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
