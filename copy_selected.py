import os
import shutil
from html.parser import HTMLParser

# List of HTML snippets selected by the user
selected_html = [
    '<img class="image-accordion-home trae-browser-inspect-draggable" src="images/LITTLE_DUCK_-035_1.png" alt="Mulher feliz deitada em uma sofá" width="100%" height="100%">',
    '<img class="text_with_img trae-browser-inspect-draggable" src="images/Design_sem_nome_3.webp" alt="Imagem do produto destacando sobre &lt;strong&gt;Conforto e Segurança&lt;/strong&gt;" width="auto" height="auto">',
    '<img class="text_with_img trae-browser-inspect-draggable" src="images/Design_sem_nome_9.png" alt="Imagem do produto destacando sobre Organização e Praticidade" width="auto" height="auto">',
    '<img class="text_with_img trae-browser-inspect-draggable" src="images/LITTLE_DUCK_-019_2_1.png" alt="Imagem do produto destacando sobre Brinquedos Educativos" width="auto" height="auto">',
    '<img class="text_with_img trae-browser-inspect-draggable" src="images/Design_sem_nome_4_130e55a4-1841-459f-809a-7a734b87e366.webp" alt="Imagem do produto destacando sobre Mobilidade e Crescimento" width="auto" height="auto">',
    '<img src="images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64.webp" alt="Kit Brincar" srcset="images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_1.webp 200w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_4.webp 300w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_3.webp 400w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_2.webp 500w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_9.webp 600w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_5.webp 700w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_12.webp 800w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_11.webp 1000w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_7.webp 1200w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_6.webp 1400w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_8.webp 1600w, images/25_40c16202-ab4d-40c7-ad9e-dde8197d4e64_10.webp 1800w" width="1920" height="1920" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6.webp" alt="Painel Magnético Com Imãs Divertidos" srcset="images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_1.webp 200w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_2.webp 300w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_4.webp 400w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_6.webp 500w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_3.webp 600w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_7.webp 700w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_5.webp 800w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_9.webp 1000w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_8.webp 1200w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_11.webp 1400w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_12.webp 1600w, images/hf_20260217_195504_206f1962-1183-4fd2-ad2b-9dba2a3cbfc6_10.webp 1800w" width="4096" height="4096" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/Ambientada-12.webp" alt="FlowerPad Tatame - Linho | Little Duck" srcset="images/Ambientada-12_2.webp 200w, images/Ambientada-12_4.webp 300w, images/Ambientada-12_3.webp 400w, images/Ambientada-12_5.webp 500w, images/Ambientada-12_7.webp 600w, images/Ambientada-12_6.webp 700w, images/Ambientada-12_8.webp 800w, images/Ambientada-12_10.webp 1000w, images/Ambientada-12_12.webp 1200w, images/Ambientada-12_11.webp 1400w, images/Ambientada-12_9.webp 1600w, images/Ambientada-12_1.webp 1800w" width="1920" height="1920" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/41.webp" alt="Kit Magia" srcset="images/41_3.webp 200w, images/41_4.webp 300w, images/41_5.webp 400w, images/41_6.webp 500w, images/41_8.webp 600w, images/41_7.webp 700w, images/41_9.webp 800w, images/41_2.webp 1000w, images/41_10.webp 1200w, images/41_11.webp 1400w, images/41_12.webp 1600w, images/41_1.webp 1800w" width="1920" height="1920" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/CAMACASALBEGE-01.webp" alt="Cama Montessoriana Casal - Linho | Little Duck" srcset="images/CAMACASALBEGE-01_8.webp 200w, images/CAMACASALBEGE-01_9.webp 300w, images/CAMACASALBEGE-01_10.webp 400w, images/CAMACASALBEGE-01_2.webp 500w, images/CAMACASALBEGE-01_3.webp 600w, images/CAMACASALBEGE-01_6.webp 700w, images/CAMACASALBEGE-01_1.webp 800w, images/CAMACASALBEGE-01_12.webp 1000w, images/CAMACASALBEGE-01_7.webp 1200w, images/CAMACASALBEGE-01_5.webp 1400w, images/CAMACASALBEGE-01_11.webp 1600w, images/CAMACASALBEGE-01_4.webp 1800w" width="1920" height="1920" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/Designsemnome_8.webp" alt="Cama Montessoriana Solteiro - Linho | Little Duck" srcset="images/Designsemnome_8_4.webp 200w, images/Designsemnome_8_11.webp 300w, images/Designsemnome_8_5.webp 400w, images/Designsemnome_8_3.webp 500w, images/Designsemnome_8_6.webp 600w, images/Designsemnome_8_2.webp 700w, images/Designsemnome_8_1.webp 800w, images/Designsemnome_8_9.webp 1000w, images/Designsemnome_8_8.webp 1200w, images/Designsemnome_8_10.webp 1400w, images/Designsemnome_8_12.webp 1600w, images/Designsemnome_8_7.webp 1800w" width="1920" height="1920" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/13.webp" alt="Sofá de Brincar - Linho | Little Duck" srcset="images/13_3.webp 200w, images/13_5.webp 300w, images/13_12.webp 400w, images/13_10.webp 500w, images/13_6.webp 600w, images/13_4.webp 700w, images/13_1.webp 800w, images/13_7.webp 1000w, images/13_8.webp 1200w, images/13_9.webp 1400w, images/13_11.webp 1600w, images/13_2.webp 1800w" width="2500" height="2500" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3.webp" alt="Cama Montessoriana Nuvem - Branco | Little Duck" srcset="images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_5.webp 200w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_4.webp 300w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_3.webp 400w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_6.webp 500w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_10.webp 600w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_8.webp 700w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_1.webp 800w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_7.webp 1000w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_2.webp 1200w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3_9.webp 1400w, images/WhatsAppImage2026-01-23at16.57.45_1_2751eb9b-7584-4bd3-9fde-3c23738b77a3.webp 1600w" width="1600" height="1600" loading="lazy" class="product-card__image product-card__image--secondary object-fill trae-browser-inspect-draggable" fetchpriority="low" sizes="(max-width: 699px) calc(100vw /  - 40px), (max-width: 1200px) calc(100vw / 0 - 64px), calc((100vw - 96px) /  - (24px /  * -1))">',
    '<img src="images/Frame_2_2_convert.io.webp" alt="" srcset="images/Frame_2_2_convert.io_1.webp 200w, images/Frame_2_2_convert.io_2.webp 300w, images/Frame_2_2_convert.io_6.webp 400w, images/Frame_2_2_convert.io_5.webp 500w, images/Frame_2_2_convert.io_4.webp 600w, images/Frame_2_2_convert.io_7.webp 700w, images/Frame_2_2_convert.io_3.webp 800w, images/Frame_2_2_convert.io_9.webp 900w, images/Frame_2_2_convert.io_8.webp 1000w, images/Frame_2_2_convert.io_10.webp 1200w, images/Frame_2_2_convert.io_11.webp 1400w, images/Frame_2_2_convert.io_13.webp 1600w, images/Frame_2_2_convert.io_12.webp 1800w, images/Frame_2_2_convert.io_14.webp 2000w, images/Frame_2_2_convert.io_15.webp 2200w, images/Frame_2_2_convert.io_17.webp 2400w, images/Frame_2_2_convert.io_20.webp 2600w, images/Frame_2_2_convert.io_18.webp 2800w, images/Frame_2_2_convert.io_16.webp 3000w, images/Frame_2_2_convert.io_19.webp 3200w" width="5421" height="2711" loading="eager" fetchpriority="high" sizes="100vw" class="trae-browser-inspect-draggable">',
    '<img src="images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb.webp" alt="" srcset="images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_1.webp 200w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_12.webp 300w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_15.webp 400w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_4.webp 500w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_2.webp 600w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_3.webp 700w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_9.webp 800w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_8.webp 900w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_10.webp 1000w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_16.webp 1200w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_5.webp 1400w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_11.webp 1600w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_14.webp 1800w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_7.webp 2000w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_13.webp 2200w, images/LD__CONSUMIDOR_BANNER_DESKTOP_9d74f046-db88-421e-8e85-4918dcf87ecb_6.webp 2400w" width="2500" height="850" loading="eager" fetchpriority="high" sizes="min(1300px, 100vw)" class="trae-browser-inspect-draggable">',
    '<img src="images/cama_montessoriana.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/CAMAS.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/Cama_Casal.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/kit.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/sofa_de_brincar.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/play_baby.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/Sem_nome_662_x_662_px.png" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/LINHA_WOOD_ICONE_1.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/acessorio.webp" alt="" width="auto" height="auto" loading="lazy" decoding="async" fetchpriority="low" class="trae-browser-inspect-draggable">',
    '<img src="images/Ativo_1_1.png" alt="" srcset="images/Ativo_1_1.png 184w, images/Ativo_1_1.png 184w" width="184" height="33" sizes="145px" class="header__logo-image trae-browser-inspect-draggable">',
    '<img src="images/CreditCard-white.png" alt="Parcelamento em até 12x sem juros" width="auto" height="auto" class="trae-browser-inspect-draggable">',
    '<img src="images/Truck-white.png" alt="Entrega para todo o Brasil" width="auto" height="auto" class="trae-browser-inspect-draggable">',
    '<img src="images/HandHeart-white.png" alt="Atendimento via WhatsApp" width="auto" height="auto" class="trae-browser-inspect-draggable">',
    '<img src="images/ShieldCheck-white.png" alt="Site 100% Seguro" width="auto" height="auto" class="trae-browser-inspect-draggable">',
    '<img src="images/SealPercent-white.png" alt="15%OFF no PIX" width="auto" height="auto" class="trae-browser-inspect-draggable">',
    '<img src="images/logo_footer.png" alt="Logo Little Duck" class="footer-section-wrapper-col1-img1 trae-browser-inspect-draggable" width="auto" height="auto">'
]

class ImgParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.found_images = set()

    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            attr_dict = {k: v for k, v in attrs if v is not None}
            if 'src' in attr_dict:
                self.found_images.add(attr_dict['src'].strip())
            if 'srcset' in attr_dict:
                # Parse srcset: "url width, url width, ..."
                parts = attr_dict['srcset'].split(',')
                for p in parts:
                    url = p.strip().split(' ')[0]
                    self.found_images.add(url.strip())

def main():
    parser = ImgParser()
    for html in selected_html:
        parser.feed(html)
    
    dest_dir = 'imagensfunfa'
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
    
    # Process found images
    to_copy = []
    for img_path in parser.found_images:
        # Clean up path
        clean_path = img_path.replace('\\', '/')
        if clean_path.startswith('images/'):
            to_copy.append(clean_path)
    
    print(f"Found {len(to_copy)} images to copy.")
    
    copied_count = 0
    missing_count = 0
    
    for src_file in to_copy:
        # Check if file exists
        if os.path.exists(src_file):
            filename = os.path.basename(src_file)
            dest_file = os.path.join(dest_dir, filename)
            try:
                shutil.copy2(src_file, dest_file)
                copied_count += 1
            except Exception as e:
                print(f"Error copying {src_file}: {e}")
        else:
            print(f"Warning: Source file not found: {src_file}")
            missing_count += 1
            
    print(f"Successfully copied {copied_count} files to '{dest_dir}'.")
    if missing_count > 0:
        print(f"Missing {missing_count} files.")

if __name__ == "__main__":
    main()
