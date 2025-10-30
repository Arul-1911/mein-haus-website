import Album from "@/components/customer/service-details-page/album";
import BookEstimate from "@/components/customer/service-details-page/book-estimate";
import Description from "@/components/customer/description";
import Photos from "@/components/customer/photos";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const serviceDetails = [
  {
    id: 1,
    serviceName: "Home Renovation",
    priceRange: "1500 - 5000",
    description:
      "Complete home transformation services including structural changes, interior redesign, and modern upgrades. We handle everything from planning to execution with premium materials and skilled craftsmanship.",
    photos: [
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
    ],
    albums: [
      {
        id: 1,
        albumName: "Modern Apartment Makeover",
        serviceName: "Home Renovation",
        customerRating: 4.8,
        customerReview:
          "Absolutely stunning transformation! The team delivered beyond our expectations. The attention to detail was remarkable.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 2,
        albumName: "Kitchen Remodel Project",
        serviceName: "Home Renovation",
        customerRating: 4.9,
        customerReview:
          "Professional work with attention to detail. Our kitchen looks amazing and is now the heart of our home!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 3,
        albumName: "Living Room Transformation",
        serviceName: "Home Renovation",
        customerRating: 4.7,
        customerReview:
          "They completely changed the feel of our living space. Modern, comfortable, and exactly what we wanted.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 4,
        albumName: "Complete House Restoration",
        serviceName: "Home Renovation",
        customerRating: 5.0,
        customerReview:
          "Brought our old house back to life while maintaining its original charm. Exceptional craftsmanship!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 5,
        albumName: "Complete House Restoration",
        serviceName: "Home Renovation",
        customerRating: 5.0,
        customerReview:
          "Brought our old house back to life while maintaining its original charm. Exceptional craftsmanship!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 6,
        albumName: "Complete House Restoration",
        serviceName: "Home Renovation",
        customerRating: 5.0,
        customerReview:
          "Brought our old house back to life while maintaining its original charm. Exceptional craftsmanship!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
    ],
  },
  {
    id: 2,
    serviceName: "Bathroom Remodeling",
    priceRange: "800 - 3000",
    description:
      "Transform your bathroom into a luxurious retreat with our expert remodeling services. We specialize in modern fixtures, tiling, plumbing, and space optimization for functional and beautiful bathrooms.",
    photos: [
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
    ],
    albums: [
      {
        id: 1,
        albumName: "Master Bathroom Upgrade",
        serviceName: "Bathroom Remodeling",
        customerRating: 4.7,
        customerReview:
          "Turned our outdated bathroom into a spa-like oasis. Very professional crew and clean work!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 2,
        albumName: "Guest Bathroom Remodel",
        serviceName: "Bathroom Remodeling",
        customerRating: 4.6,
        customerReview:
          "Perfect small bathroom makeover. Maximized the space beautifully and on budget!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 3,
        albumName: "Luxury Spa Bathroom",
        serviceName: "Bathroom Remodeling",
        customerRating: 4.9,
        customerReview:
          "Absolutely breathtaking! The walk-in shower and freestanding tub transformed our daily routine.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
    ],
  },
  {
    id: 3,
    serviceName: "Interior Design",
    priceRange: "500 - 2500",
    description:
      "Professional interior design services to create beautiful, functional spaces that reflect your personality. From color schemes to furniture selection, we bring your vision to life.",
    photos: [
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
    ],
    albums: [
      {
        id: 1,
        albumName: "Contemporary Living Space",
        serviceName: "Interior Design",
        customerRating: 4.9,
        customerReview:
          "The designer understood exactly what we wanted. Our living room has never looked better!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 2,
        albumName: "Modern Office Space",
        serviceName: "Interior Design",
        customerRating: 4.6,
        customerReview:
          "Created a productive and beautiful workspace. Highly recommended for commercial projects!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 3,
        albumName: "Family Home Design",
        serviceName: "Interior Design",
        customerRating: 4.8,
        customerReview:
          "Perfect balance of style and functionality for our growing family. Kids love their new rooms!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 4,
        albumName: "Minimalist Apartment",
        serviceName: "Interior Design",
        customerRating: 4.7,
        customerReview:
          "Clean, modern, and exactly the minimalist look we were hoping for. Space utilization is brilliant.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
    ],
  },
  {
    id: 4,
    serviceName: "Plumbing Services",
    priceRange: "100 - 800",
    description:
      "Comprehensive plumbing solutions including repairs, installations, and maintenance. Our certified plumbers ensure reliable and efficient service for all your plumbing needs.",
    photos: [
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
    ],
    albums: [
      {
        id: 1,
        albumName: "Complete Pipe Replacement",
        serviceName: "Plumbing Services",
        customerRating: 4.5,
        customerReview:
          "Fixed our persistent leak issues efficiently. Great service and fair pricing. No more water damage!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 2,
        albumName: "Water Heater Installation",
        serviceName: "Plumbing Services",
        customerRating: 4.7,
        customerReview:
          "Quick and professional installation. Our new water heater works perfectly with no issues.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 3,
        albumName: "Bathroom Plumbing Overhaul",
        serviceName: "Plumbing Services",
        customerRating: 4.6,
        customerReview:
          "Replaced all old plumbing in our bathroom. Professional work and very tidy installation.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 4,
        albumName: "Kitchen Sink & Drainage",
        serviceName: "Plumbing Services",
        customerRating: 4.8,
        customerReview:
          "Fixed our slow-draining sink and installed a new faucet. Works like a charm now!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
    ],
  },
  {
    id: 5,
    serviceName: "Electrical Work",
    priceRange: "120 - 1000",
    description: `Professional electrical services including wiring, installations, repairs, and safety inspections. Our licensed electricians ensure all work meets safety standards and codes
      Professional electrical services including wiring, installations, repairs, and safety inspections. Our licensed electricians ensure all work meets safety standards and codes
      Professional electrical services including wiring, installations, repairs, and safety inspections. Our licensed electricians ensure all work meets safety standards and codes.`,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    ],
    albums: [
      {
        id: 1,
        albumName: "Home Rewiring Project",
        serviceName: "Electrical Work",
        customerRating: 4.8,
        customerReview:
          "Safe and professional electrical work. Our home is now up to code and much safer for our family.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 2,
        albumName: "Smart Home Installation",
        serviceName: "Electrical Work",
        customerRating: 4.7,
        customerReview:
          "Expert installation of our smart home system. Everything works perfectly and looks clean!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 3,
        albumName: "Lighting System Upgrade",
        serviceName: "Electrical Work",
        customerRating: 4.9,
        customerReview:
          "Transformed our home with new lighting. The dimmer switches and LED installation are fantastic!",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 4,
        albumName: "Electrical Panel Replacement",
        serviceName: "Electrical Work",
        customerRating: 4.6,
        customerReview:
          "Replaced our outdated electrical panel. Much more reliable and safer for our appliances.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
      {
        id: 5,
        albumName: "Outdoor Lighting & Outlets",
        serviceName: "Electrical Work",
        customerRating: 4.7,
        customerReview:
          "Perfect outdoor electrical setup for our garden and patio. Weatherproof and well-installed.",
        beforeImages: [
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
        afterImages: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
        ],
      },
    ],
  },
];

async function ServiceDetailsPage({ params }) {
  const { id } = await params;
  const service = serviceDetails.find((item) => Number(item.id) === Number(id));

  return (
    <main className="bg-[#F9F9F9]">
      <section className="max-w-5xl py-8 px-3 mx-auto">
        {/* top section  */}
        <div className="flex gap-3 flex-wrap justify-between items-center">
          <div className="flex gap-1">
            <Link href="/customer">
              <ChevronLeft />
            </Link>
            <Link href="/customer">Home</Link> / Services
          </div>
          <div className="hidden md:block">
            <BookEstimate />
          </div>
        </div>
        {/* service details section  */}
        <div className="bg-white p-5 flex flex-col md:flex-row justify-between  my-6 items-start gap-5 rounded-2xl">
          <h2 className="font-semibold text-2xl items-center  md:max-w-[60%]">
            {service?.serviceName || "service name"}
          </h2>
          <div>
            <p className="text-[#9D9D9D] font-medium">Price Range:</p>
            <p className="font-semibold">${service?.priceRange || "N/A"}</p>
          </div>
        </div>
        {/* description section  */}
        <div className="p-5 bg-white rounded-2xl">
          <p className="font-semibold text-xl">Description</p>
          <div>
            <Description description={service?.description} />
          </div>
        </div>
        {/* Albums section  */}
        {service?.albums?.length > 0 && (
          <div className="p-5 bg-white rounded-2xl my-6">
            <h2 className="font-semibold text-xl">Albums</h2>
            <div>
              <Album slides={service?.albums} />
            </div>
          </div>
        )}
        {/* Photos section  */}
        {service?.photos?.length > 0 && (
          <div className="p-5 bg-white rounded-2xl">
            <h2 className="font-semibold text-xl">Photos</h2>
            <div className="my-6">
              <Photos photos={service.photos} />
            </div>
          </div>
        )}
      </section>
      {/* mobile view create estimate  */}
      <div className="flex justify-center items-center bg-white -mt-8 mb-8 md:hidden">
        <BookEstimate />
      </div>
    </main>
  );
}

export default ServiceDetailsPage;
