import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Details from "./pages/Details.jsx"
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import Sort from "./pages/Sort.jsx";
import CarsPage from "./pages/CarsPage.jsx";
import TestRideForm from "./pages/TestRideForm.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminPage from "./pages/AdminPage.jsx";

const cars = [
  {
    id: 1,
    model: "Audi Q3 Facelit",
    price: "52,00,000",
    images: ["/src/assets/audi1.jpg", "/src/assets/audi2.jpg", "/src/assets/audi3.jpg"],
    category: "SUV ",
    brand: "Audi",
    country: "Germany",
    transmissionType: "Automatic",
    mileage: "5.4 kmpl",
    engine:"1984 cc",
    power: "187.74bhp@4200-6000rpm",
    torque: "320Nm@1500-4100rpm",
    groundClearence: " 170 mm",
    driveType: "AWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"62 Litres"
  },
  {
    id: 2,
    model: "Mercedes-AMG C 63 S E Performance",
    price: "2,24,26,190",
    images: ["/src/assets/amg1.jpg", "/src/assets/amg2.jpg", "/src/assets/amg3.jpg"],
    category: "Sedan",
    brand: "Mercedes-Benz",
    country: "Germany",
    transmissionType: "Automatic",
    mileage: "50 kmpl",
    engine:"1991 cc",
    power: "469bhp@6750rpm",
    torque: "545Nm@5250-5500rpm",
    groundClearence: "238mm",
    driveType: "4WD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"60 Liters"
  },
  {
    id: 3,
    model: "Honda Amaze",
    price: "8,98,086",
    images: ["/src/assets/amaze1.jpg", "/src/assets/amaze2.jpg", "/src/assets/amaze3.jpg"],
    category: "Sedan",
    brand: "Honda",
    country: "Japan",
    transmissionType: "Automatic",
    mileage: "19.46 kmpl",
    engine:"1199 cc",
    power: "89bhp@6000rpm",
    torque: "110Nm@4800rpm",
    groundClearence: "172 mm",
    driveType: "FWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"35 Liters"
  },
  {
    id: 4,
    model: "Mahindra BE6e EV",
    price: "19,87,379",
    images: ["/src/assets/BE1.jpg", "/src/assets/BE2.jpg", "/src/assets/BE3.jpg"],
    category: "SUV",
    brand: "Mahindra",
    country: "India",
    transmissionType: "Automatic",
    mileage: "535 km",
    power: "228bhp",
    torque: "380Nm",
    groundClearence: "207 mm",
    driveType: "RWD",
    safety: "5",
    seatingCapacity:"5",
    engine:"59 kWh"
  },
  {
    id: 5,
    model: "Tata Curvv Ev",
    price: "20,22,750",
    images: ["/src/assets/curvv1.jpg", "/src/assets/curvv2.jpg", "/src/assets/curvv3.jpg"],
    category: "SUV",
    brand: "Tata",
    country: "India",
    transmissionType: "Automatic",
    mileage: "585 km",
    
    power: "165bhp",
    torque: "215Nm",
    groundClearence: "186 mm",
    driveType: "FWD",
    safety: "5",
    seatingCapacity:"5",
    engine:"55 kWh"
  },
  {
    id: 6,
    model: "Maruti Dzire",
    price: "7,65,000",
    images: ["/src/assets/dzire1.jpg", "/src/assets/dzire2.jpg", "/src/assets/dzire3.jpg"],
    category: "Sedan",
    brand: "Maruti Suzuki",
    country: "Japan",
    transmissionType: "Automatic",
    mileage: "25.71 kmpl",
    engine:"1197 cc",
    power: "80bhp@5700rpm",
    torque: "111.7Nm@4300rpm",
    groundClearence: "163 mm",
    driveType: "FWD",
    safety: "3",
    seatingCapacity:"5",
    fuelCapacity:"37 Litres"
  },
  {
    id: 7,
    model: "Mahindra Thar Roxx",
    price: "15,41,224",
    images: ["/src/assets/roxx1.jpg", "/src/assets/roxx2.jpg", "/src/assets/roxx3.jpg"],
    category: "SUV",
    brand: "Mahindra",
    country: "India",
    transmissionType: "Automatic",
    mileage: "15.2 kmpl",
    engine:"2184 cc",
    power: "172bhp@3500rpm",
    torque: "370Nm@1500-3000rpm",
    groundClearence: "226 mm",
    driveType: "4WD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"57 Litres"
  },
  {
    id: 8,
    model: "Maruti Suzuki Swift",
    price: "7,31,069",
    images: ["/src/assets/swift1.jpg", "/src/assets/swift2.jpg", "/src/assets/swift3.jpg"],
    category: "Hatchback",
    brand: "Maruti Suzuki",
    country: "Japan",
    transmissionType: "Automatic",
    mileage: "25.75 kmpl",
    engine:"1197 cc",
    power: "80.46bhp@5700rpm",
    torque: "111.7Nm@4300rpm",
    groundClearence: "163 mm",
    driveType: "FWD",
    safety: "3",
    seatingCapacity:"5",
    fuelCapacity:"37 Litres"
  },
  {
    id: 9,
    model: "BMW M5 F90 ",
    price: "2,29,00,000",
    images: ["/src/assets/bmw1.jpg", "/src/assets/bmw2.jpg", "/src/assets/bmw3.jpg"],
    category: "Hatchback",
    brand: "BMW",
    country: "Germany",
    transmissionType: "Automatic",
    mileage: "9.8 kmpl",
    engine:"4.395 cc, 8-cylinder, M TwinPower Turbo petrol engine",
    power: "625 hp",
    torque: "750 Nm",
    groundClearence: "128-132 mm",
    driveType: " AWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"68 Liters"
  },
  {
    id: 10,
    model: "Mercedes-Benz GLA ",
    price: "58,28,000",
    images: ["/src/assets/benz1.jpg", "/src/assets/benz2.jpg", "/src/assets/benz3.jpg"],
    category: "SUV",
    brand: "Mercedes-Benz",
    country: "Germany",
    transmissionType: "Automatic",
    mileage: "18.9 kmpl",
    engine:"1950 cc",
    power: "187.74bhp@3800rpm",
    torque: "400Nm@1600-2600rpm",
    groundClearence: "183mm",
    driveType: "AWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"50 Liters"
  },
  {
    id: 11,
    model: "Honda Elevate",
    price: "13,51,386",
    images: ["/src/assets/elevate1.jpg", "/src/assets/elevate2.jpg", "/src/assets/elevate3.jpg"],
    category: "SUV",
    brand: "Honda",
    country: "Japan",
    transmissionType: "Automatic",
    mileage: "16.92 kmpl",
    engine:"1498 cc",
    power: "119bhp@6600rpm",
    torque: "145Nm@4300rpm",
    groundClearence: "220 mm",
    driveType: "FWD",
    safety: "5",
    seatingCapacity:"4",
    fuelCapacity:"40 Liters"
  },
  {
    id: 12,
    model: "Hyundai Creta",
    price: "12,73,000",
    images: ["/src/assets/creta1.jpg", "/src/assets/creta2.jpg", "/src/assets/creta3.jpg"],
    category: "SUV",
    brand: "Hyundai",
    country: "Korea",
    transmissionType: "Automatic",
    mileage: "19.1 kmpl",
    engine:"1493 cc",
    power: "114bhp@4000rpm",
    torque: "250Nm@1500-2750rpm",
    groundClearence: "190 mm",
    driveType: "FWD",
    safety: "4",
    seatingCapacity:"4",
    fuelCapacity:"50 Liters"
  },
  {
    id: 13,
    model: "Toyota Innova Hycross",
    price: "23,20,000",
    images: ["/src/assets/innova1.jpg", "/src/assets/innova2.jpg", "/src/assets/innova3.jpg"],
    category: "MUV",
    brand: "Toyota",
    country: "Japan",
    transmissionType: "Automatic",
    mileage: "23.24 kmpl",
    engine:"1987 cc",
    power: "183.72bhp@6600rpm",
    torque: "188Nm@4398-5196rpm",
    groundClearence: "185 mm",
    driveType: "FWD",
    safety: "4",
    seatingCapacity:"7/8",
    fuelCapacity:"52 Liters"
  },
  {
    id: 14,
    model: "Mahindra XUV 3XO",
    price: "9,00,000",
    images: ["/src/assets/3xo1.jpg", "/src/assets/3xo2.jpg", "/src/assets/3xo3.jpg"],
    category: "SUV",
    brand: "Mahindra",
    country: "India",
    transmissionType: "Automatic",
    mileage: "18.2 kmpl",
    engine:"1197 cc",
    power: "128.73bhp@5000rpm",
    torque: "230Nm@1500-3750rpm",
    groundClearence: "201 mm",
    driveType: "FWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"42 Litres"
  },
  {
    id: 15,
    model: "Tata Altroz Racer",
    price: "10,63,000",
    images: ["/src/assets/altroz1.jpg", "/src/assets/altroz2.jpg", "/src/assets/altroz3.jpg"],
    category: "Hatchback",
    brand: "Tata",
    country: "India",
    transmissionType: "Manual",
    mileage: "18.2 kmpl",
    engine:"1199 cc Turbo",
    power: "118.35bhp@5500rpm",
    torque: "170Nm@1750- 4000rpm",
    groundClearence: "165 mm",
    driveType: "FWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"37 Litres"
  },
  {
    id: 16,
    model: "Skoda Slavia",
    price: "12,30,000",
    images: ["/src/assets/slavia1.jpg", "/src/assets/slavia2.jpg", "/src/assets/slavia3.jpg"],
    category: "Sedan",
    brand: "Skoda",
    country: "Germany",
    transmissionType: "Automatic",
    mileage: "19.36 kmpl",
    engine:"1498 cc",
    power: "147.51bhp@5000-6000rpm",
    torque: "250Nm@1600-3500rpm",
    groundClearence: "179 mm",
    driveType: "FWD",
    safety: "4",
    seatingCapacity:"5",
    fuelCapacity:"45 Litres"
  },
  {
    id: 17,
    model: "BYD eMax 7",
    price: "28,40,000",
    images: ["/src/assets/byd1.jpg", "/src/assets/byd2.jpg", "/src/assets/byd3.jpg"],
    category: "MUV",
    brand: "BYD ",
    country: "China",
    transmissionType: "Automatic",
    mileage: "530 km",
    
    power: "201bhp",
    torque: "310Nm",
    groundClearence: "170 mm",
    driveType: "FWD",
    safety: "4",
    seatingCapacity:"6/7",
    engine:"71.8 kWh"
  },
  {
    id: 18,
    model: "Force Gurkha",
    price: "20,00,000",
    images: ["/src/assets/gurkha1.jpg", "/src/assets/gurkha2.jpg", "/src/assets/gurkha3.jpg"],
    category: "SUV",
    brand: "Force Motors",
    country: "India",
    transmissionType: "Manual",
    mileage: "9.5 kmpl",
    engine:"2596 cc",
    power: "138bhp@3200rpm",
    torque: "320Nm@1400-2600rpm",
    groundClearence: "233 mm",
    driveType: "4WD",
    safety: "4",
    seatingCapacity:"4",
    fuelCapacity:"63.5 Litres"
  },
  {
    id: 19,
    model: "Jeep wrangler rubicon",
    price: "83,00,000",
    images: ["/src/assets/jeep1.jpg", "/src/assets/jeep2.jpg", "/src/assets/jeep3.jpg"],
    category: "SUV",
    brand: "Jeep",
    country: "America",
    transmissionType: "Automatic",
    mileage: "10.6 kmpl",
    engine:"1995 cc",
    power: "268.20bhp@5250rpm",
    torque: "400Nm@3000rpm",
    groundClearence: "237 mm",
    driveType: "4WD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"81 Litres"
  },
  {
    id: 20,
    model: "Volkswagen Virtus",
    price: "13,40,701",
    images: ["/src/assets/virtus1.jpg", "/src/assets/virtus2.jpg", "/src/assets/virtus3.jpg"],
    category: "Sedan",
    brand: "Volkswagen",
    country: "Germany",
    transmissionType: "Automatic",
    mileage: "19.62 kmpl",
    engine:"1498 cc",
    power: "147.51bhp@5000-6000rpm",
    torque: "250Nm@1600-3500rpm",
    groundClearence: "179 mm",
    driveType: "FWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"45 Litres"
  },
  {
    id: 21,
    model: "Maruti Baleno",
    price: "7,52,070",
    images: ["/src/assets/baleno1.jpg", "/src/assets/baleno2.jpg", "/src/assets/baleno3.jpg"],
    category: "Hatchback",
    brand: "Maruti Suzuki",
    country: "Japan",
    transmissionType: "Manual",
    mileage: "22.35 kmpl",
    engine:"1197 cc",
    power: "88.50bhp@6000rpm",
    torque: "2113Nm@4400rpm",
    groundClearence: "170 mm",
    driveType: "FWD",
    safety: "5",
    seatingCapacity:"5",
    fuelCapacity:"37 Litres"
  },
  
 
];


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cars={cars}/>}></Route>
        <Route path="/home" element={<Home cars={cars}/>}></Route>
        <Route path="/cars" element={<CarsPage cars={cars}/>}></Route>
        <Route path="/details/:carId" element={<Details cars={cars}/>}></Route>
        <Route path="/sort" element={<Sort cars={cars}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testRideForm" element={<TestRideForm />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
