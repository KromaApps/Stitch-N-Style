import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Package, Truck, MapPin, Clock } from "lucide-react";

const OrderStatusBadge = ({ status }) => {
  const statusConfig = {
    "Ready to Ship": {
      color: "bg-green-100 text-green-800",
      icon: Truck,
    },
    Processing: {
      color: "bg-yellow-100 text-yellow-800",
      icon: Clock,
    },
    Delivered: {
      color: "bg-blue-100 text-blue-800",
      icon: Package,
    },
  };

  const { color, icon: StatusIcon } =
    statusConfig[status] || statusConfig["Processing"];

  return (
    <div
      className={`flex items-center gap-2 ${color} px-3 py-1 rounded-full text-sm`}
    >
      <StatusIcon size={16} />
      {status}
    </div>
  );
};

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Package className="text-pink-600" size={32} />
            My Orders
          </h1>
          <p className="text-gray-500 mt-2">
            Track and manage your recent purchases
          </p>
        </div>

        <div className="space-y-6">
          {products.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="
                bg-white shadow-md rounded-xl overflow-hidden 
                border border-gray-100 transition-all 
                hover:shadow-lg"
            >
              <div className="p-6 flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="flex-shrink-0 md:w-1/4">
                  <img
                    className="
                      w-full h-36 object-cover rounded-lg 
                      shadow-sm transition-transform 
                      hover:scale-105"
                    src={item.image[0]}
                    alt={item.name}
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow md:w-1/2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {currency}
                        {item.price}
                      </span>
                    </div>
                    <div className="h-4 border-r border-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <span>Quantity: 1</span>
                    </div>
                    <div className="h-4 border-r border-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <span>Size: M</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <MapPin size={16} className="text-pink-500" />
                    <span>Order Date: 09, Oct, 2004</span>
                  </div>
                </div>

                {/* Order Status & Actions */}
                <div className="md:w-1/4 flex flex-col items-end justify-between">
                  <OrderStatusBadge status="Ready to Ship" />
                  <button
                    className="
                      mt-4 w-full bg-blue-50 text-pink-600 
                      border border-blue-200 py-2 rounded-lg 
                      hover:bg-blue-100 transition-colors 
                      flex items-center justify-center gap-2"
                  >
                    <Truck size={18} />
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination or More Orders */}
        {products.length > 4 && (
          <div className="mt-8 text-center">
            <button
              className="
                px-6 py-3 bg-gray-100 text-gray-700 
                rounded-lg hover:bg-gray-200 transition-colors"
            >
              View More Orders
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
