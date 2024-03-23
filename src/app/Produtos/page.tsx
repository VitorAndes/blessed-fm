"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
      <div className="flex flex-col items-center text-center space-y-3">
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
            <CarouselContent className="md:w-[750px]">
              {products?.map((product) => {
                return (
                  <CarouselItem key={product.id} className="md:basis-1/2">
                    <Card className="bg-sky-300/20 border-none">
                      <CardContent className="flex aspect-square items-center mx-auto justify-center p-0">
                        <Image
                          className="w-[300px] h-[300px] rounded-2xl shadow-lg shadow-sky-200 cursor-grab active:cursor-grabbing"
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
            <CarouselPrevious className="sm:hidden" variant="default" />
            <CarouselNext className="sm:hidden" variant="default" />
          </Carousel>
        </div>
      </div>
    </Reveal>
  );
}
