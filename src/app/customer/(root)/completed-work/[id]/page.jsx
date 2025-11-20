import CompletedWorkServicesCard from "@/components/customer/completed-work/servicesCard";
import Description from "@/components/customer/description";
import Photos from "@/components/customer/photos";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, EllipsisVertical, Wallet } from "lucide-react";
import Link from "next/link";

const completedWorkData = [
  {
    id: 1,
    projectid: "#DS-654321",
    bookingId: "HA-81923642",
    totalCost: "2500",
    title: "Kitchen and Bathroom renovation for my house",
    createdAt: "20 Sep 2025",
    deadline: "Less than 2 week",
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
    services: 3,
    address: "123 Main St, Anytown, USA",
    description: "Renovation work for kitchen and bathroom",
    estimates: [
      {
        id: 1,
        serviceName: "Kitchen Renovation",
        projectCost: "1500",
        assignedDate: "15 Sep 2025",
        assignedProName: "John Doe",
      },
      {
        id: 2,
        serviceName: "Bathroom Renovation",
        projectCost: "500",
        assignedDate: "15 Sep 2025",
        assignedProName: "Jane Smith",
      },
      {
        id: 3,
        serviceName: "Plumbing",
        projectCost: "500",
        assignedDate: "16 Sep 2025",
        assignedProName: "Bob Johnson",
      },
    ],
  },
  {
    id: 2,
    createdAt: "20 Sep 2025",
    projectid: "#DS-466",
    bookingId: "HA-81923642",
    totalCost: "2500",
    title: "Bathroom renovation for my house",
    deadline: "Less than a week",
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
    services: 3,
    address: "456 Elm St, Anytown, USA",
    description: "Renovation work for bathroom",
    estimates: [
      {
        id: 1,
        serviceName: "Kitchen Renovation",
        projectCost: "1500",
        assignedDate: "15 Sep 2025",
        assignedProName: "John Doe",
      },
      {
        id: 2,
        serviceName: "Bathroom Renovation",
        projectCost: "500",
        assignedDate: "15 Sep 2025",
        assignedProName: "Jane Smith",
      },
      {
        id: 3,
        serviceName: "Plumbing",
        projectCost: "500",
        assignedDate: "16 Sep 2025",
        assignedProName: "Bob Johnson",
      },
    ],
  },
  {
    id: 3,
    projectid: "#DS-654321",
    totalCost: "2500",
    title: "Kitchen and Bathroom renovation for my house",
    createdAt: "20 Sep 2025",
    deadline: "Less than 2 week",
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
    services: 3,
    address: "123 Main St, Anytown, USA",
    description: "Renovation work for kitchen and bathroom",
    estimates: [
      {
        id: 1,
        serviceName: "Kitchen Renovation",
        projectCost: "1500",
        assignedDate: "15 Sep 2025",
        assignedProName: "John Doe",
      },
      {
        id: 2,
        serviceName: "Bathroom Renovation",
        projectCost: "500",
        assignedDate: "15 Sep 2025",
        assignedProName: "Jane Smith",
      },
      {
        id: 3,
        serviceName: "Plumbing",
        projectCost: "500",
        assignedDate: "16 Sep 2025",
        assignedProName: "Bob Johnson",
      },
    ],
  },
  {
    id: 4,
    createdAt: "20 Sep 2025",
    projectid: "#DS-466",
    bookingId: "HA-81923642",
    totalCost: "2500",
    title: "Bathroom renovation for my house",
    deadline: "Less than a week",
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
    services: 3,
    address: "456 Elm St, Anytown, USA",
    description: "Renovation work for bathroom",
    estimates: [
      {
        id: 1,
        serviceName: "Kitchen Renovation",
        projectCost: "1500",
        assignedDate: "15 Sep 2025",
        assignedProName: "John Doe",
      },
      {
        id: 2,
        serviceName: "Bathroom Renovation",
        projectCost: "500",
        assignedDate: "15 Sep 2025",
        assignedProName: "Jane Smith",
      },
      {
        id: 3,
        serviceName: "Plumbing",
        projectCost: "500",
        assignedDate: "16 Sep 2025",
        assignedProName: "Bob Johnson",
      },
    ],
  },
  {
    id: 5,
    projectid: "#DS-654321",
    totalCost: "2500",
    bookingId: "HA-81923642",
    title: "Kitchen and Bathroom renovation for my house",
    createdAt: "20 Sep 2025",
    deadline: "Less than 2 week",
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
    services: 3,
    address: "123 Main St, Anytown, USA",
    description: "Renovation work for kitchen and bathroom",
    estimates: [
      {
        id: 1,
        serviceName: "Kitchen Renovation",
        projectCost: "1500",
        assignedDate: "15 Sep 2025",
        assignedProName: "John Doe",
      },
      {
        id: 2,
        serviceName: "Bathroom Renovation",
        projectCost: "500",
        assignedDate: "15 Sep 2025",
        assignedProName: "Jane Smith",
      },
      {
        id: 3,
        serviceName: "Plumbing",
        projectCost: "500",
        assignedDate: "16 Sep 2025",
        assignedProName: "Bob Johnson",
      },
    ],
  },
  {
    id: 6,
    createdAt: "20 Sep 2025",
    projectid: "#DS-466",
    bookingId: "HA-81923642",
    totalCost: "2500",
    title: "Bathroom renovation for my house",
    deadline: "Less than a week",
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
    services: 3,
    address: "456 Elm St, Anytown, USA",
    description: "Renovation work for bathroom",
    estimates: [
      {
        id: 1,
        serviceName: "Kitchen Renovation",
        projectCost: "1500",
        assignedDate: "15 Sep 2025",
        assignedProName: "John Doe",
      },
      {
        id: 2,
        serviceName: "Bathroom Renovation",
        projectCost: "500",
        assignedDate: "15 Sep 2025",
        assignedProName: "Jane Smith",
      },
      {
        id: 3,
        serviceName: "Plumbing",
        projectCost: "500",
        assignedDate: "16 Sep 2025",
        assignedProName: "Bob Johnson",
      },
    ],
  },
];

async function CompletedWorkDetailsPage({ params }) {
  const { id } = await params;
  const data = completedWorkData.find((item) => item.id === Number(id));
  //   console.log(data);

  return (
    <main className="bg-[#F9F9F9]">
      <section className="max-w-7xl py-8 px-3 mx-auto">
        {/* Top */}
        {/* top section  */}
        <div className="flex gap-3 flex-wrap justify-between  items-center">
          <div className="flex items-center  gap-1">
            <Link href="/customer/completed-work">
              <ChevronLeft />
            </Link>
            <Link href="/customer/completed-work">Completed Project / </Link>
            {data?.projectid || "N/A"}
          </div>
          <div className="flex items-center gap-3">
            {/* three dots  */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="my-3 text-md lg:text-lg lg:px-4 cursor-pointer py-2 bg-black hover:bg-black/80 text-white rounded-4xl">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className=" mr-3 mt-2 text-lg"
                align="center"
              >
                <DropdownMenuGroup className="text-center text-[#545454]">
                  <DropdownMenuItem>
                    <Link
                      href="/customer/completed-work/invoice/reg-due/2"
                      className="flex items-center gap-2 font-medium"
                    >
                      <div>
                        <Wallet />
                      </div>
                      <p>Invoice</p>
                    </Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href="/customer/notes"
                      className="flex items-center gap-2 font-medium"
                    >
                      <div>
                        <NotebookPen />
                      </div>
                      <p>Notes</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/customer/support">
                      <div className="flex items-center gap-2 font-medium">
                        <div>
                          <Headset />
                        </div>
                        <p>Support</p>
                      </div>
                    </Link>
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* content section  */}
        <div className="grid grid-cols-12 gap-7 my-6">
          {/* left   */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mx-auto px-1">
              {/* Estimate details section  */}
              <div className="bg-white p-5 flex flex-col  justify-between  my-6 items-start gap-5 rounded-2xl">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center w-full">
                  <h2 className="font-semibold text-2xl items-center  md:max-w-[60%]">
                    {data?.title || "N/A"}
                  </h2>
                  <div>
                    <p className="text-[#FD760D] font-semibold">
                      ${Number(data?.totalCost)}
                    </p>
                    <p className="font-medium text-[#ABABAB]">
                      Total Project Cost
                    </p>
                  </div>
                </div>
                <div className="border border-dashed  w-full" />
                <div className="grid grid-cols-2 md:grid-cols-4 font-medium gap-5 items-center w-full">
                  {data?.bookingId && (
                    <div>
                      <p className="text-[#ABABAB] font-medium">Booking ID</p>
                      <p>{data?.bookingId}</p>
                    </div>
                  )}
                  {data?.createdAt && (
                    <div>
                      <p className="text-[#ABABAB] font-medium">
                        Estimate Created At
                      </p>
                      <p>{data?.createdAt}</p>
                    </div>
                  )}
                  {/* {Number(data.totalCost) && ( */}
                  <div>
                    <p className="text-[#ABABAB] font-medium">
                      Total Project Cost
                    </p>
                    <p>${Number(data?.totalCost)}</p>
                  </div>
                  {/* // )} */}
                  {data?.services > 0 && (
                    <div className="">
                      <p className="text-[#ABABAB] font-medium ml-3">
                        No.of Services
                      </p>
                      <p className="ml-3">{data?.services}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Address section  */}
              {data?.address && (
                <div className="p-5 bg-white rounded-2xl my-5">
                  <p className="font-semibold text-xl">Address</p>
                  <p className="font-normal text-[#ABABAB] my-2">
                    {data?.address}
                  </p>
                </div>
              )}

              {/* description section  */}
              {data?.description && (
                <div className="p-5 bg-white rounded-2xl">
                  <p className="font-semibold text-xl">Description</p>
                  <div>
                    <Description
                      description={data?.description}
                      textsize="text-md"
                    />
                  </div>
                </div>
              )}

              {/* Project photos  */}
              {data?.photos?.length > 0 && (
                <div>
                  <h2 className="font-semibold text-lg my-4">Project Photos</h2>
                  <Photos photos={data?.photos || []} />
                </div>
              )}
            </div>
          </div>
          {/* right   */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-semibold text-2xl mt-4 text-center">
              Estimated Scope of Services
            </h2>
            <div className="px-1 my-4">
              {/* List of Services section  */}
              <div className="flex flex-col gap-6 justify-items-start justify-baseline">
                {data?.estimates?.map((service) => (
                  <CompletedWorkServicesCard
                    key={service.id}
                    estimate={service}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompletedWorkDetailsPage;
