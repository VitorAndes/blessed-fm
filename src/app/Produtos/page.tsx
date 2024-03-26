"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getProducts } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Reveal } from "../ui/reveal";

export default function Page() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <Reveal>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-left space-y-3">
          <h1 className="font-bold text-2xl  text-black">Produtos</h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id
            laborum maiores itaque eius! Quis quaerat reiciendis iusto molestias
            officia incidunt, quod eaque dolores, inventore repellendus
            laudantium explicabo eveniet consequuntur!
          </p>
        </div>
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="lg:w-[750px]">
              {products?.map((product) => {
                return (
                  <CarouselItem key={product.id} className="lg:basis-1/2">
                    <Card className="bg-sky-300/20 border-none">
                      <CardContent className="flex md:aspect-square items-center mx-auto justify-center p-0 lg:h-[300px] lg:w-[300px]">
                        <Image
                          className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-2xl shadow-lg shadow-sky-200 cursor-grab active:cursor-grabbing"
                          src={product.src}
                          alt={product.alt}
                          width={300}
                          height={300}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </Reveal>
  );
}
