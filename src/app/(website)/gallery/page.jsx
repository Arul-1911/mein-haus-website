"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Static Data ---
const mockData = {
  data: [
    {
      id: 1,
      service_id: 18,
      service_name: "Roofing, Siding, and Trim",
      title: "Eavestrough Repair and Replacement",
      price_range: "$2000 - $3000",
      before: [
        "https://meinhaus.ca/images/service_gallery/w9a4AalIUZDs0sPFfVtha1Kkau5BjFVIYRrkyF5W.png",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/gDFQr7rScnuIWkeGUVdyW4gErcmpUnip4DClim6A.png",
        "https://meinhaus.ca/images/service_gallery/UXgWWThZAaale8cej55IORn38VxZkkCXTNDXih9s.png",
        "https://meinhaus.ca/images/service_gallery/SL1yrvXyI1N099maJVtwxR2tSC7RLBA7QqqkhPfk.png",
        "https://meinhaus.ca/images/service_gallery/zQJHAypvmu0HNMsgUWTxwCFti541WDGLRwPrhRvp.png",
      ],
    },
    {
      id: 2,
      service_id: 14,
      service_name: "Flooring & Tile Services",
      title: "Mississauga Shower Renewal",
      price_range: "$3000 - $4000",
      before: [
        "https://meinhaus.ca/images/service_gallery/r4t9czzRnRdaKduxv9avSLDGY3j54Xh61qbmGOGc.jpg",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/clFL3jQcF6lFasTENwgmgsAg4Yqk1hftq7fJFYHt.jpg",
        "https://meinhaus.ca/images/service_gallery/3ybuHcTCJPhllH5OKmdUx3ib5PSnqlksLNpO99os.jpg",
        "https://meinhaus.ca/images/service_gallery/MkkvUBnMONwiIxA0yVC70IpOnBAVBdd76fKc9Odj.jpg",
      ],
    },
    {
      id: 3,
      service_id: 14,
      service_name: "Flooring & Tile Services",
      title: "bathroom renos",
      price_range: "$4000 - $6500",
      before: [],
      after: [
        "https://meinhaus.ca/images/service_gallery/TsOiNvLGtNTPOoDgUM3xC9R9ooArqQRaQXEJTSgi.png",
        "https://meinhaus.ca/images/service_gallery/JBkaqLX7x1fOAa5tDK1D6RMnf5YVghBMvhmO7gym.png",
        "https://meinhaus.ca/images/service_gallery/soviVK7C1syITBDtMG69VPzUyN3RQk5q1ANe8SMT.png",
        "https://meinhaus.ca/images/service_gallery/wevfjUj9fxKgGSqBJDU3A9il4JM0VypacdZRW2mG.png",
        "https://meinhaus.ca/images/service_gallery/4ymtaEalfce6EZgeXmMAIhmyv6Qozvdl96xdrdc0.png",
        "https://meinhaus.ca/images/service_gallery/vaI73M7TrTs70zGqPATHHxqHIH8Q6jsgxwZ88q1v.png",
        "https://meinhaus.ca/images/service_gallery/TonM04THHSLhIGUnEvbdz8me9OuXqAcTngRZiQF0.png",
        "https://meinhaus.ca/images/service_gallery/lAP9DoXBEJnQrYF8M0HKIEa7Kjc90S5OpTFtdG1y.png",
      ],
    },
    {
      id: 4,
      service_id: 28,
      service_name: "Painting",
      title: "Exterior home painting",
      price_range: "$1000 - $7500",
      before: [
        "https://meinhaus.ca/images/service_gallery/pWKeN45UEvHZ0RRbk07RlIvuPoYh1Uyw6G9Qt37Y.png",
      ],
      after: [
        "https://meinhaus.ca/images/service_gallery/N8hRjLa5sAvA3ALZwJXKHhZwBMCJ6VfYWQbypV9w.png",
      ],
    },
    {
      id: 5,
      service_id: 21,
      service_name: "Stone, Masonry, & Asphalt",
      title: "concrete projects",
      price_range: "$1500 - $10000",
      before: [],
      after: [
        "https://meinhaus.ca/images/service_gallery/xnUya8CRTb8DxgK2WfsB5fkSeVIBrNUNsQjKEXCP.png",
        "https://meinhaus.ca/images/service_gallery/LAfmht0JA6N34ORQM6MhoZGbsqrP1p2rrfZYwKom.png",
        "https://meinhaus.ca/images/service_gallery/Xi8Tc47MStich7bs1O9ReRq2KQ0XJ476v0MwgjRU.png",
        "https://meinhaus.ca/images/service_gallery/k1Xy3RqEDBJjZhkPen3FwqpKg5GMksXIax2q9f9Q.png",
      ],
    },
    {
      id: 6,
      service_id: 37,
      service_name: "Demolition",
      title: "Home Demolition",
      price_range: "$1000 - $5000",
      before: [],
      after: [
        "https://meinhaus.ca/images/service_gallery/V1Ppp40i8OkjaU8OJVl8kEC2uVvhM02NZkDmDhWh.png",
        "https://meinhaus.ca/images/service_gallery/edF7legFsSUdX5wb6E4Mpjcb3vRRPnznPsM8Njx4.png",
        "https://meinhaus.ca/images/service_gallery/WIlvVQUuUdj33srSSHP26PPw4CjVI2SXt7pN5NE7.png",
        "https://meinhaus.ca/images/service_gallery/kCj0AyHPMeABxdqYSfkIMcldQhnctkCJILYRu1WE.png",
      ],
    },
  ],
  current_page: 1,
  last_page: 1,
  total: 2,
};

const Gallery = () => {
  const [services, setServices] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const scrollRef = useRef(null);

  // Initialize static data
  useEffect(() => {
    const allServices = [
      ...new Map(
        mockData.data.map((d) => [
          d.service_id,
          { id: d.service_id, name: d.service_name },
        ])
      ).values(),
    ];
    setServices(allServices);
    setItems(mockData.data);
    setLastPage(mockData.last_page);
  }, []);

  const fetchPage = (p, serviceId = null) => {
    let filtered = mockData.data;
    if (serviceId) {
      filtered = filtered.filter((d) => d.service_id === serviceId);
    }
    setItems(p === 1 ? filtered : [...items, ...filtered]);
    setPage(p);
    setLastPage(mockData.last_page);
  };

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Services Horizontal Scroll */}
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => scroll("left")}>
          <ChevronLeft />
        </Button>
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-auto no-scrollbar space-x-3 w-full"
        >
          {services.map((s) => (
            <Button
              key={s.id}
              variant={selectedService === s.id ? "default" : "outline"}
              onClick={() => {
                setSelectedService(s.id);
                fetchPage(1, s.id);
              }}
              className="cursor-pointer"
            >
              {s.name}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={() => scroll("right")}>
          <ChevronRight />
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            onClick={() => setActiveItem(item)}
          />
        ))}
      </div>

      {/* Load More */}
      {page < lastPage && (
        <div className="flex justify-center">
          <Button onClick={() => fetchPage(page + 1, selectedService)}>
            Load More
          </Button>
        </div>
      )}

      {/* Modal */}
      <Dialog open={!!activeItem} onOpenChange={() => setActiveItem(null)}>
        <DialogContent className="w-[90vw] max-w-[1200px]">
          {activeItem && (
            <>
              <div className="my-1">
                <h2 className="text-2xl font-semibold">{activeItem.title}</h2>
                <p className="text-sm text-muted-foreground">
                  Price Range: {activeItem.price_range}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Before Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Before</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeItem.before.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt="Before"
                        className="rounded-lg w-full max-w-[400px] h-48 object-cover"
                      />
                    ))}
                  </div>
                </div>
                {/* After Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">After</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeItem.after.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt="After"
                        className="rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Card Component with autoplay before/after images
const GalleryCard = ({ item, onClick }) => {
  const [index, setIndex] = useState(0);
  const images = [
    ...item.before.map((url) => ({ type: "Before", url })),
    ...item.after.map((url) => ({ type: "After", url })),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-lg transition py-0"
    >
      <CardContent className="p-0 relative bg-[#1E9BD00F]">
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          {images[index].type}
        </span>
        <img
          src={images[index].url}
          alt={item.title}
          className="rounded-lg h-50 w-full object-cover"
        />
        {/* <div className="p-3">
          <h3 className="font-normal text-lg text-start ">
            {item.service_name}
          </h3>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default Gallery;
