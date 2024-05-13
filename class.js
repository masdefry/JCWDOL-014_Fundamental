// CLASS
// Cetakan untuk Membuat Object dengan Property yg Sama

// Case. Name, Price, Discount
// const products = [
//     { name: 'A', price: 5000, discount: 0 }, 
//     { name: 'B', price: 10000, discount: 10 },
//     { name: 'C', Price: 15000, discount: 15 }
// ]

// products.forEach(item => {
//     console.log(`${item.name} = ${item.price}`)
// })

// class Products{
//     name = '' 
//     price = 0 
//     discount = 0

//     constructor(name, price, discount){
//         this.name = name; 
//         this.price = price;
//         this.discount = discount; 
//     }
// }

// const product1 = new Products('Apel', 10000, 10)
// console.log(product1)

// const arrProducts = [
//     new Products('Apel', 10000, 10), 
//     new Products('Jeruk', 15000, 15), 
//     new Products('Anggur', 20000, 20)
// ]

// Case.
// Di sebuah supermarket, terdapat beberapa product category. Mulai dari electronic, fashion dan snack. 
// Setiap product category memiliki identitas yang berbeda-beda, seperti product name, product stock, dll.
// 1. Jabarkan apa saja identitas yg dimiliki untuk masing-masing product category!
// 2. Class berdasarkan product category

// Electronic: Product Name, Product Price, Product Discount, Product Stock, Product SerialNumber, Product Guarantee, Product Color 
// Fashion: Product Name, Product Price, Product Discount, Product Stock, Product Size, Product Color, Product Material
// Snack: Product Name, Product Price, Product Discount Product Stock, Product Flavour, Product Expiry, Product Netto

// INHERITANCE: Pewarisan Property
class Products{
    constructor(name, price, discount, stock, color){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.color = color;
    }
}

class ProductElectronic extends Products{
    constructor(serialNumber, guarantee, color, name, price, discount, stock){
    super(name, price, discount, stock, color)
        this.serialNumber = serialNumber;
        this.guarantee = guarantee;
    }
}

const inputElectronic = new ProductElectronic('123', '2024', 'Blue', 'A')
console.log(inputElectronic)

class ProductFashion{
    constructor(name, price, discount, stock, size, color, material){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.size = size; 
        this.material = material;
    }
}

class ProductSnack{
    constructor(name, price, discount, stock, flavour, expiry, netto){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.flavour = flavour;
        this.expiry = expiry; 
        this.netto = netto;
    }
}



// ENCAPSULATION: Membungkus Data kedalam 1 Unit yang bernama Class
// Public Property
// Private Property

class Users{
    username; 
    email;
    #password;
    constructor(username, password){
        this.username = username;
        this.#password = password;
    }

    get showPassword(){
        console.log(this.#password)
    }

    set validateEmail(email){
        if(!email.includes('@')){
            console.log('Email Not Valid!')
        }else{
            this.email = email
        }
    }
}

const userAccount1 = new Users('ryandefryan', 'abc123')
userAccount1.validateEmail = 'ryan@gmail.com'
console.log(userAccount1)
// console.log(userAccount1.showPassword())



// Case.
// Program Untuk Menyimpan Data Pendaftaran Student Purwadhika ke 1 Unit, 
// Validasi Data Inputnya
// name, username, email (Valid), password (Min: 6, Max: 10), address, 
// phoneNumber (Show Data: 08123335*****), 
// programSelected('JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD')

// Subject: Exercise Registrasi Student Pwd
// To: defryan@purwadhika.com