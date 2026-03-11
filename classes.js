// Address class for handling shipping and billing addresses
class Address {
    constructor(street, city, state, zipCode, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }

    // Method to get full address as a formatted string
    getFullAddress() {
        return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}, ${this.country}`;
    }

    // Method to validate if address has all required fields
    isValid() {
        return this.street && this.city && this.state && this.zipCode && this.country;
    }

    // Method to update address details
    updateAddress(newStreet, newCity, newState, newZipCode, newCountry) {
        if (newStreet) this.street = newStreet;
        if (newCity) this.city = newCity;
        if (newState) this.state = newState;
        if (newZipCode) this.zipCode = newZipCode;
        if (newCountry) this.country = newCountry;
    }
}

// Order class for managing customer orders
class Order {
    constructor(orderId, customerId, items = [], shippingAddress) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.items = items; // Array of item objects {productId, name, price, quantity}
        this.shippingAddress = shippingAddress; // Address object
        this.status = 'pending'; // pending, shipped, delivered, cancelled
        this.datePlaced = new Date();
        this.totalAmount = this.calculateTotal();
    }

    // Method to calculate total amount of the order
    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Method to add an item to the order
    addItem(productId, name, price, quantity = 1) {
        const existingItem = this.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ productId, name, price, quantity });
        }
        this.totalAmount = this.calculateTotal();
    }

    // Method to remove an item from the order
    removeItem(productId) {
        this.items = this.items.filter(item => item.productId !== productId);
        this.totalAmount = this.calculateTotal();
    }

    // Method to update order status
    updateStatus(newStatus) {
        const validStatuses = ['pending', 'shipped', 'delivered', 'cancelled'];
        if (validStatuses.includes(newStatus)) {
            this.status = newStatus;
        } else {
            throw new Error('Invalid order status');
        }
    }

    // Method to get order summary
    getOrderSummary() {
        return {
            orderId: this.orderId,
            totalAmount: this.totalAmount,
            status: this.status,
            itemCount: this.items.length,
            datePlaced: this.datePlaced
        };
    }
}

// Profile class for customer profile management
class Profile {
    constructor(customerId, name, email, phone = '') {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.addresses = []; // Array of Address objects
        this.orders = []; // Array of Order objects
        this.createdDate = new Date();
        this.isPrimeMember = false;
    }

    // Method to add a new address
    addAddress(address) {
        if (address instanceof Address && address.isValid()) {
            this.addresses.push(address);
        } else {
            throw new Error('Invalid address');
        }
    }

    // Method to remove an address
    removeAddress(index) {
        if (index >= 0 && index < this.addresses.length) {
            this.addresses.splice(index, 1);
        } else {
            throw new Error('Invalid address index');
        }
    }

    // Method to update profile information
    updateProfile(newName, newEmail, newPhone) {
        if (newName) this.name = newName;
        if (newEmail) this.email = newEmail;
        if (newPhone) this.phone = newPhone;
    }

    // Method to place a new order
    placeOrder(order) {
        if (order instanceof Order && order.customerId === this.customerId) {
            this.orders.push(order);
        } else {
            throw new Error('Invalid order or customer mismatch');
        }
    }

    // Method to get order history
    getOrderHistory() {
        return this.orders.map(order => order.getOrderSummary());
    }

    // Method to get default shipping address
    getDefaultAddress() {
        return this.addresses.length > 0 ? this.addresses[0] : null;
    }

    // Method to toggle Prime membership
    togglePrimeMembership() {
        this.isPrimeMember = !this.isPrimeMember;
    }

    // Method to get profile summary
    getProfileSummary() {
        return {
            customerId: this.customerId,
            name: this.name,
            email: this.email,
            phone: this.phone,
            addressCount: this.addresses.length,
            orderCount: this.orders.length,
            isPrimeMember: this.isPrimeMember
        };
    }
}

// Export the classes for use in other modules
module.exports = { Address, Order, Profile };
