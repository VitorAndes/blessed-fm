import { Button } from "@/app/components/ui/button";
import { Phone, Mail, Instagram } from "lucide-react";
import { Reveal } from "../components/reveal";

export default function page() {
  return (
    <>
      <Reveal>
        <div className="flex flex-col m-auto items-center py-24 mx-12 space-y-8">
          <div className="text-left space-y-8">
            <h1 className="font-bold text-2xl text-black">
              Entre em contato com a gente!
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae
              incidunt at, ducimus ad veritatis, culpa vitae laborum reiciendis,
              corporis praesentium? Laudantium, sint debitis id quos ab aperiam
              hic corporis.
            </p>
            <Button
              className="flex items-center p-8 gap-2 hover:text-green-500 rounded-lg"
              variant="default"
            >
              <Phone />
              <a
                href="https://api.whatsapp.com/send?phone=5592985596497"
                target="_blank"
                className="text-lg"
              >
                Entrar em contato
              </a>
            </Button>
          </div>
          <div>
            <ul className="flex">
              <li>
                <Button
                  variant="link"
                  className="hover:text-red-600 transition-colors flex items-center text-slate-100 gap-2"
                >
                  <Mail />
                  <a href="maito:@" target="_blank" className="text-lg">
                    Blessedfm
                  </a>
                </Button>
              </li>
              <li className="flex gap-2 items-center ">
                <Button
                  variant="link"
                  className="hover:text-pink-500 transition-colors flex items-center text-slate-100 gap-2"
                >
                  <Instagram />
                  <a
                    href="https://www.instagram.com/blessedfm22/"
                    target="_blank"
                    className="text-lg"
                  >
                    Blessedfm
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  );
}
