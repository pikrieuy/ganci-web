import { MoveRight, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="border-pink-200 text-pink-600 bg-pink-50">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                {t('hero.tagline', 'Kriya Custom Hadir!')}
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular text-slate-900">
                Abadikan <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Memori</span> Anda
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                {t('hero.subtitle', 'Kami mengubah memori berharga Anda menjadi karya seni gantungan kunci yang personal dan dibuat sepenuh hati. Desain eksklusif hanya untuk Anda.')}
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4 text-slate-700 hover:bg-pink-50 hover:text-pink-600 border-pink-200" variant="outline" asChild>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                  Hubungi Kami <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" className="gap-4 bg-pink-500 hover:bg-pink-600 text-white" asChild>
                <Link to="/catalog">
                  Pesan Sekarang <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square overflow-hidden">
              <img src="/foto_keychain/foto-6.jpg" alt="Keychain 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-muted rounded-md row-span-2 overflow-hidden">
              <img src="/foto_keychain/foto-8.jpg" alt="Keychain 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-muted rounded-md aspect-square overflow-hidden">
              <img src="/foto_keychain/foto-3.jpg" alt="Keychain 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
