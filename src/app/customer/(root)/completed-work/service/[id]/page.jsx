import Description from "@/components/customer/description";
import AdditionalWorks from "@/components/customer/completed-work/additional-works";
import Ratings from "@/components/customer/ongoing-work/rating-progress";
import Photos from "@/components/customer/photos";
import Album from "@/components/customer/service-details-page/album";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { renderStars } from "@/utils/website/renderStars";
import {
  ChevronLeft,
  EllipsisVertical,
  Headset,
  MoveRight,
  NotebookPen,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddReview from "@/components/customer/completed-work/add-review";
import EditReview from "@/components/customer/completed-work/edit-review";

const completedWorkServiceData = [
  {
    id: 1,
    projectid: "#DS-654321",
    bookingId: "HA-81923642",
    totalCost: "2500",
    serviceName: "Applicance Install",
    estimateName: "Kitchen and Bathroom renovation for my house",
    createdAt: "20 Sep 2025",
    proAssignedDate: "20 Sep 2025",
    deadline: "Less than 2 week",
    isReviewed: true,
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
    progressPhotos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
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
    status: "Completed",
    depositAmount: "500",
    address: "123 Main St, Anytown, USA",
    description: "Renovation work for kitchen and bathroom",
    additionalWork: [
      {
        id: 1,
        title: "Kitchen and Bathroom Renovation",
        desc: "Need to fix the furniture in manner it can't break again. clean them off to remove dirt and grime, repair any chips and cracks in manner it can't break again. clean,Need to fix the furniture in manner it can't break again. clean them off to remove dirt and grime, repair any chips and cracks in manner it can't break again. clean",
        status: "approved",
        showButton: true,
        amount: "550",
        photos: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
        ],
      },
      {
        id: 2,
        title: "Kitchen and Bathroom Renovation",
        desc: "Need to fix the furniture in manner it can't break again. clean them off to remove dirt and grime, repair any chips and cracks in manner it can't break again. clean,Need to fix the furniture in manner it can't break again. clean them off to remove dirt and grime, repair any chips and cracks in manner it can't break again. clean",
        status: "declined",
        amount: "550",
        showButton: false,
        photos: [
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
          "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
          "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
          "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
          "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
        ],
      },
    ],
    proDetails: {
      name: "Santhiya Bharathi",
      completedProjects: 50,
      totalRatings: 50,
      avgRating: 4.5,
      ratings: [
        { title: "Average rating", rating: 4.2 },
        { title: "Punctuality", rating: 3.8 },
        { title: "Quality", rating: 4.5 },
        { title: "Character", rating: 4.0 },
      ],
    },
    recentProjects: [
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
  {
    id: 2,
    projectid: "#DS-654321",
    bookingId: "HA-81923642",
    totalCost: "2500",
    serviceName: "Applicance Install",
    estimateName: "Kitchen and Bathroom renovation for my house",
    createdAt: "20 Sep 2025",
    proAssignedDate: "20 Sep 2025",
    deadline: "Less than 2 week",
    isReviewed: true,
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
    progressPhotos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
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
    status: "Completed",
    depositAmount: "500",
    address: "123 Main St, Anytown, USA",
    description: "Renovation work for kitchen and bathroom",
    proDetails: {
      name: "Santhiya Bharathi",
      completedProjects: 50,
      totalRatings: 50,
      avgRating: 4.5,
      ratings: [
        { title: "Average rating", rating: 4.2 },
        { title: "Punctuality", rating: 3.8 },
        { title: "Quality", rating: 4.5 },
        { title: "Character", rating: 4.0 },
      ],
    },
    recentProjects: [
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
  {
    id: 3,
    projectid: "#DS-654321",
    bookingId: "HA-81923642",
    totalCost: "2500",
    serviceName: "Applicance Install",
    estimateName: "Kitchen and Bathroom renovation for my house",
    createdAt: "20 Sep 2025",
    proAssignedDate: "20 Sep 2025",
    deadline: "Less than 2 week",
    isReviewed: false,
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
    progressPhotos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
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
    status: "Completed",
    depositAmount: "500",
    address: "123 Main St, Anytown, USA",
    description: "Renovation work for kitchen and bathroom",

    proDetails: {
      name: "Santhiya Bharathi",
      completedProjects: 50,
      totalRatings: 50,
      avgRating: 4.5,
      ratings: [
        { title: "Average rating", rating: 4.2 },
        { title: "Punctuality", rating: 3.8 },
        { title: "Quality", rating: 4.5 },
        { title: "Character", rating: 4.0 },
      ],
    },
    recentProjects: [
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

async function CompletedServiceDetailsPage({ params }) {
  const { id: serviceid } = await params;
  const data = completedWorkServiceData.find(
    (item) => item.id === Number(serviceid)
  );
  return (
    <main className="bg-[#F9F9F9]">
      <section className="max-w-7xl py-8 px-3 mx-auto">
        {/* top section  */}
        <div className="flex gap-3 flex-wrap justify-between  items-center">
          <div className="flex items-center flex-wrap  gap-1">
            <Link href="/customer/completed-work">
              <ChevronLeft />
            </Link>
            <Link href="/customer/completed-work">Completed Project / </Link>
            {data?.projectid || "N/A"} / {data?.serviceName}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/customer/completed-work/invoice/service-due/2">
              <Button variant="black">
                <span>
                  <Wallet />
                </span>
                <p>Invoice</p>
              </Button>
            </Link>
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
                      href={`/customer/completed-work/service/${serviceid}/notes`}
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
                    <Link
                      href={`/customer/completed-work/service/${serviceid}/support`}
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <div>
                          <Headset />
                        </div>
                        <p>Support</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* content section  */}
        <div className="grid grid-cols-12 gap-7 my-3">
          {/* left   */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mx-auto px-1">
              {/* Estimate details section  */}
              <div className="bg-white p-5 flex flex-col  justify-between  my-6 items-start gap-5 rounded-2xl">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center w-full">
                  <div>
                    <p className="mb-2 text-[#ABABAB]">{data?.serviceName}</p>
                    <h2 className="font-semibold text-2xl items-center  md:max-w-[60%]">
                      {data?.estimateName || "N/A"}
                    </h2>
                  </div>
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
                <div className="grid grid-cols-1 w-full space-y-3">
                  {/* top  */}
                  <div className="grid grid-cols-2 md:grid-cols-4 font-medium gap-10 items-center w-full">
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
                        Project Deadline
                      </p>
                      <p>${data?.deadline}</p>
                    </div>
                    {/* // )} */}
                    {data?.services > 0 && (
                      <div className="">
                        <p className="text-[#ABABAB] font-medium ml-3">
                          Status
                        </p>
                        <p className="ml-3 bg-[#8CC5071A] text-[#8CC507] px-2 py-1 w-fit rounded-2xl">
                          {data?.status}
                        </p>
                      </div>
                    )}
                  </div>
                  {/* bottom  */}
                  <div className="grid grid-cols-2 md:grid-cols-4 font-medium gap-10 items-center w-full">
                    {data?.totalCost && (
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          Total Project Cost
                        </p>
                        <p>${data?.totalCost}</p>
                      </div>
                    )}
                    {data?.depositAmount && (
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          Deposit Amount
                        </p>
                        <p>{data?.depositAmount}</p>
                      </div>
                    )}
                    {data?.proAssignedDate && (
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          Pro Assigned Date
                        </p>
                        <p>${data?.proAssignedDate}</p>
                      </div>
                    )}
                    {data?.proDetails?.name && (
                      <div className="">
                        <p className="text-[#ABABAB] font-medium ml-3">
                          Assigned Pro
                        </p>
                        <p className="ml-3">{data?.proDetails?.name}</p>
                      </div>
                    )}
                  </div>
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
                  <h2 className="font-semibold text-2xl my-4">
                    Project Photos
                  </h2>
                  <Photos photos={data?.photos || []} />
                </div>
              )}

              {/* Progress photos  */}
              {data?.progressPhotos?.length > 0 && (
                <div className="my-12">
                  <h2 className="font-semibold text-2xl my-4">
                    Progress Photos
                  </h2>
                  <Photos photos={data?.progressPhotos || []} />
                </div>
              )}
            </div>
            {/* Additional work  */}
            {data?.additionalWork?.length > 0 && (
              <div>
                <h2 className="font-semibold text-2xl my-4">Additional Work</h2>
                <div>
                  <AdditionalWorks additionalWork={data?.additionalWork} />
                </div>
              </div>
            )}
          </div>
          {/* right side   */}
          <div className="col-span-12 lg:col-span-4">
            {/* Ratings section  */}
            <div className="mt-6">
              {data.isReviewed === false && <AddReview />}
            </div>
            <div className="mt-6">
              {data.isReviewed === true && <EditReview />}
            </div>
            {/* Pro details  */}
            <div className="bg-white p-4 my-5 rounded-2xl">
              <h2 className="font-semibold text-xl">Professional Details</h2>
              <div>
                <div className="flex items-center gap-3 my-3">
                  {/* Avatar */}
                  <div className="max-lg:hidden">
                    <Link href="/customer/profile">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {data?.proDetails?.name}
                    </p>
                    <p className="text-[#9D9D9D] text-sm">Professional Name</p>
                  </div>
                </div>
                <div className="flex justify-between max-sm:gap-3 items-center">
                  <div className="relative h-23 w-40 object-contain">
                    <Image
                      src="/customer/root/ongoing-work/verified.png"
                      alt="verified image"
                      fill
                      sizes="(max-width: 768px) 160px, 360px"
                    />
                  </div>
                  <div className="relative h-23 w-40 object-contain">
                    <Image
                      src="/customer/root/ongoing-work/completed-projects.png"
                      alt="Completed-projects image"
                      fill
                      sizes="(max-width: 768px) 160px, 360px"
                      className="z-2 rounded-2xl"
                    />
                    <div className="absolute top-2 left-3 z-3">
                      <p className="font-semibold text-xl">
                        {data?.proDetails?.completedProjects}
                      </p>
                      <p className="font-semibold text-xs text-wrap max-w-[1em]">
                        Completed projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pro ratings  */}
            <div className="bg-white p-4 my-5 rounded-2xl">
              <div className="flex flex-col gap-2">
                <p className="text-center">
                  <span className="text-center font-semibold text-3xl">
                    {data?.proDetails?.avgRating}
                  </span>
                  /<span>5</span>
                </p>
                <p className="text-center text-[#B6B6B6] text-sm">
                  Based on {data?.proDetails?.totalRatings} ratings
                </p>
                <div>{renderStars(data?.proDetails?.avgRating, "#1E9BD0")}</div>
                <div>
                  <Ratings items={data?.proDetails?.ratings} />
                </div>
              </div>
            </div>
            {/* Recent projects  */}
            <div className="bg-white p-4 my-5 rounded-2xl">
              <h2 className="font-semibold text-xl">Recent Projects</h2>
              <div className="w-full">
                <Album slides={data?.recentProjects} isRecent={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompletedServiceDetailsPage;
