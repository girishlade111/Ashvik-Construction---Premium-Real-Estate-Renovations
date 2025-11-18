
import { type Property, type Project, type Testimonial, type Service, type Content } from './types';
import { BuildingOffice2Icon, PaintBrushIcon, WrenchScrewdriverIcon, HomeModernIcon, LightBulbIcon, ShieldCheckIcon } from './components/IconComponents';

export const properties: Property[] = [
  {
    id: 1,
    title: { en: 'Luxury Sea View Apartment', mr: 'लक्झरी समुद्र दृश्य अपार्टमेंट' },
    location: 'Bandra West, Mumbai',
    type: 'Apartment',
    listingType: 'Buy',
    bhk: 3,
    furnishing: 'Furnished',
    price: 50000000,
    priceHistory: [
      { date: '2023-01-15', price: 48000000 },
      { date: '2023-08-20', price: 49500000 },
      { date: '2024-03-10', price: 50000000 },
    ],
    area: 1800,
    images: ['https://picsum.photos/seed/sea-view-apt-1/800/600', 'https://picsum.photos/seed/sea-view-apt-2/800/600', 'https://picsum.photos/seed/sea-view-apt-3/800/600'],
    amenities: { 
      en: ['Swimming Pool', 'Gymnasium', '24/7 Security', 'Clubhouse'],
      mr: ['स्विमिंग पूल', 'व्यायामशाळा', '24/7 सुरक्षा', 'क्लबहाऊस']
    },
    description: {
      en: 'A stunning 3 BHK apartment with breathtaking views of the Arabian Sea. Fully furnished with Italian marble and modular kitchen.',
      mr: 'अरबी समुद्राचे चित्तथरारक दृश्य असलेले एक शानदार 3 BHK अपार्टमेंट. इटालियन संगमरवर आणि मॉड्यूलर किचनने पूर्णपणे सुसज्ज.'
    },
    floorPlanUrl: 'https://picsum.photos/seed/fp1/800/600',
    brochureUrl: '/brochures/property1.pdf',
  },
  {
    id: 2,
    title: { en: 'Spacious Family Villa', mr: 'प्रशस्त कौटुंबिक व्हिला' },
    location: 'Juhu, Mumbai',
    type: 'Villa',
    listingType: 'Buy',
    bhk: 5,
    furnishing: 'Semi-Furnished',
    price: 120000000,
    priceHistory: [
        { date: '2022-11-01', price: 115000000 },
        { date: '2023-06-15', price: 118000000 },
        { date: '2024-02-28', price: 120000000 },
    ],
    area: 4500,
    images: ['https://picsum.photos/seed/family-villa-1/800/600', 'https://picsum.photos/seed/family-villa-2/800/600', 'https://picsum.photos/seed/family-villa-3/800/600'],
    amenities: {
      en: ['Private Garden', 'Swimming Pool', 'Home Theatre', 'Servant Quarters'],
      mr: ['खाजगी बाग', 'स्विमिंग पूल', 'होम थिएटर', 'नोकरांसाठी खोल्या']
    },
    description: {
      en: 'An expansive 5 BHK villa in the heart of Juhu, perfect for a large family. Features a private garden and modern amenities.',
      mr: 'जुहूच्या मध्यभागी एक विस्तृत 5 BHK व्हिला, मोठ्या कुटुंबासाठी योग्य. खाजगी बाग आणि आधुनिक सुविधांनी युक्त.'
    },
    floorPlanUrl: 'https://picsum.photos/seed/fp2/800/600',
    brochureUrl: '/brochures/property2.pdf',
  },
  {
    id: 3,
    title: { en: 'Modern 2 BHK Flat for Rent', mr: 'भाड्याने देण्यासाठी आधुनिक 2 BHK फ्लॅट' },
    location: 'Andheri East, Mumbai',
    type: 'Flat',
    listingType: 'Rent',
    bhk: 2,
    furnishing: 'Unfurnished',
    price: 75000,
    area: 950,
    images: ['https://picsum.photos/seed/modern-flat-rent-1/800/600', 'https://picsum.photos/seed/modern-flat-rent-2/800/600'],
    amenities: {
      en: ['Gated Community', 'Children\'s Play Area', 'Power Backup'],
      mr: ['गेटेड समुदाय', 'मुलांसाठी खेळण्याची जागा', 'पॉवर बॅकअप']
    },
    description: {
      en: 'A well-maintained 2 BHK flat available for rent in a prime location in Andheri East. Close to metro and railway stations.',
      mr: 'अंधेरी पूर्वेतील प्रमुख ठिकाणी भाड्याने उपलब्ध असलेला सुस्थितीत 2 BHK फ्लॅट. मेट्रो आणि रेल्वे स्टेशनच्या जवळ.'
    },
    floorPlanUrl: 'https://picsum.photos/seed/fp3/800/600',
    brochureUrl: '/brochures/property3.pdf',
  },
  {
    id: 4,
    title: { en: 'Cozy 1 BHK in Powai', mr: 'पवईमध्ये आरामदायक 1 BHK' },
    location: 'Powai, Mumbai',
    type: 'Flat',
    listingType: 'Rent',
    bhk: 1,
    furnishing: 'Furnished',
    price: 55000,
    area: 600,
    images: ['https://picsum.photos/seed/cozy-1bhk-powai-1/800/600', 'https://picsum.photos/seed/cozy-1bhk-powai-2/800/600'],
    amenities: {
      en: ['Lake View', '24/7 Water Supply', 'Security'],
      mr: ['लेक व्ह्यू', '24/7 पाणीपुरवठा', 'सुरक्षा']
    },
    description: {
      en: 'A beautifully furnished 1 BHK with a view of Powai Lake. Ideal for bachelors or young couples.',
      mr: 'पवई तलावाचे दृश्य असलेले सुंदर सजवलेले 1 BHK. अविवाहित किंवा तरुण जोडप्यांसाठी आदर्श.'
    },
    floorPlanUrl: 'https://picsum.photos/seed/fp4/800/600',
    brochureUrl: '/brochures/property4.pdf',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: { en: 'Malabar Hill Govt. Bungalow Renovation', mr: 'मलबार हिल सरकारी बंगला नूतनीकरण' },
    location: 'Malabar Hill, Mumbai',
    description: {
      en: 'Complete structural and interior overhaul of a 50-year-old government officer\'s bungalow. Modernized interiors while preserving heritage elements.',
      mr: '50 वर्षे जुन्या सरकारी अधिकाऱ्याच्या बंगल्याची संपूर्ण संरचनात्मक आणि अंतर्गत दुरुस्ती. वारसा घटक जतन करताना आधुनिक इंटीरियर.'
    },
    beforeImage: 'https://picsum.photos/seed/before1/800/600',
    afterImage: 'https://picsum.photos/seed/after1/800/600',
    pdfUrl: '/projects/project1.pdf',
  },
  {
    id: 2,
    title: { en: 'Cuffe Parade Apartment Modernization', mr: 'कफ परेड अपार्टमेंट आधुनिकीकरण' },
    location: 'Cuffe Parade, Mumbai',
    description: {
      en: 'Transformed a classic 1980s apartment into a contemporary living space with an open-plan kitchen and smart home features.',
      mr: '1980 च्या दशकातील क्लासिक अपार्टमेंटला ओपन-प्लॅन किचन आणि स्मार्ट होम वैशिष्ट्यांसह समकालीन राहण्याच्या जागेत रूपांतरित केले.'
    },
    beforeImage: 'https://picsum.photos/seed/before2/800/600',
    afterImage: 'https://picsum.photos/seed/after2/800/600',
    pdfUrl: '/projects/project2.pdf',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mr. Sharma',
    location: 'IAS Officer, Mumbai',
    quote: {
      en: 'Ashvik Construction delivered beyond our expectations. Their professionalism and attention to detail in renovating our official residence were remarkable.',
      mr: 'अश्विक कन्स्ट्रक्शनने आमच्या अपेक्षांपेक्षा जास्त काम केले. आमच्या अधिकृत निवासस्थानाचे नूतनीकरण करताना त्यांची व्यावसायिकता आणि तपशिलाकडे लक्ष देणे उल्लेखनीय होते.'
    },
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: 2,
    name: 'The Patels',
    location: 'Homeowner, Juhu',
    quote: {
      en: 'We bought our dream villa through them. The process was smooth, transparent, and they helped us at every step. Highly recommended!',
      mr: 'आम्ही त्यांच्यामार्फत आमचा स्वप्नातील व्हिला खरेदी केला. प्रक्रिया सुरळीत, पारदर्शक होती आणि त्यांनी आम्हाला प्रत्येक टप्प्यावर मदत केली. अत्यंत शिफारसीय!'
    },
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
];

export const services: Service[] = [
    {
        id: 1,
        title: { en: 'Government Bungalow Renovation', mr: 'सरकारी बंगला नूतनीकरण' },
        description: { en: 'Specializing in the sensitive and high-quality renovation of government and heritage properties.', mr: 'सरकारी आणि वारसा मालमत्तांच्या संवेदनशील आणि उच्च-गुणवत्तेच्या नूतनीकरणामध्ये विशेषज्ञ.' },
        icon: BuildingOffice2Icon
    },
    {
        id: 2,
        title: { en: 'Residential Interior Design', mr: 'निवासी इंटीरियर डिझाइन' },
        description: { en: 'Creating beautiful and functional living spaces tailored to your personal style and needs.', mr: 'तुमच्या वैयक्तिक शैली आणि गरजांनुसार सुंदर आणि कार्यक्षम राहण्याची जागा तयार करणे.' },
        icon: PaintBrushIcon
    },
    {
        id: 3,
        title: { en: 'Structural Repairs & Retrofitting', mr: 'संरचनात्मक दुरुस्ती आणि रेट्रोफिटिंग' },
        description: { en: 'Strengthening and restoring the structural integrity of old buildings with modern techniques.', mr: 'आधुनिक तंत्रज्ञानाने जुन्या इमारतींची संरचनात्मक अखंडता मजबूत करणे आणि पुनर्संचयित करणे.' },
        icon: WrenchScrewdriverIcon
    },
    {
        id: 4,
        title: { en: 'Real Estate Sales & Leasing', mr: 'रिअल इस्टेट विक्री आणि भाडेपट्टी' },
        description: { en: 'A curated portfolio of premium properties for buying, selling, and renting in Mumbai\'s best localities.', mr: 'मुंबईच्या सर्वोत्तम परिसरांमध्ये खरेदी, विक्री आणि भाड्याने देण्यासाठी प्रीमियम मालमत्तांचा क्युरेट केलेला पोर्टफोलिओ.' },
        icon: HomeModernIcon
    },
    {
        id: 5,
        title: { en: 'Electrical & Plumbing Solutions', mr: 'इलेक्ट्रिकल आणि प्लंबिंग सोल्यूशन्स' },
        description: { en: 'Comprehensive solutions for all modern electrical and plumbing requirements in new and existing structures.', mr: 'नवीन आणि विद्यमान संरचनांमध्ये सर्व आधुनिक इलेक्ट्रिकल आणि प्लंबिंग आवश्यकतांसाठी व्यापक उपाय.' },
        icon: LightBulbIcon
    },
    {
        id: 6,
        title: { en: 'Waterproofing & Maintenance', mr: 'वॉटरप्रूफिंग आणि देखभाल' },
        description: { en: 'Protecting your investment with top-grade waterproofing and long-term maintenance contracts.', mr: 'टॉप-ग्रेड वॉटरप्रूफिंग आणि दीर्घकालीन देखभाल करारांसह तुमच्या गुंतवणुकीचे संरक्षण.' },
        icon: ShieldCheckIcon
    }
]

export const navLinks = [
    { name: { en: 'Home', mr: 'होम' }, page: 'Home' },
    { name: { en: 'Properties', mr: 'मालमत्ता' }, page: 'Properties' },
    { name: { en: 'Services', mr: 'सेवा' }, page: 'Services' },
    { name: { en: 'Portfolio', mr: 'पोर्टफोलिओ' }, page: 'Portfolio' },
    { name: { en: 'About Us', mr: 'आमच्याबद्दल' }, page: 'About' },
    { name: { en: 'Contact', mr: 'संपर्क' }, page: 'Contact' },
];

export const content: Content = {
    heroTitle: {
        en: "Crafting Mumbai's Finest Addresses",
        mr: "मुंबईचे सर्वोत्तम पत्ते घडवत आहोत"
    },
    heroSubtitle: {
        en: "Specialists in Premium Renovations & Real Estate",
        mr: "प्रीमियम नूतनीकरण आणि रिअल इस्टेटमधील विशेषज्ञ"
    },
    getQuote: {
        en: "Get a Quote",
        mr: "कोट मिळवा"
    },
    exploreProperties: {
        en: "Explore Properties",
        mr: "मालमत्ता एक्सप्लोर करा"
    },
    ourServices: {
        en: "Our Services",
        mr: "आमच्या सेवा"
    },
    featuredProperties: {
        en: "Featured Properties",
        mr: "वैशिष्ट्यीकृत मालमत्ता"
    },
    allProperties: {
      en: "All Properties",
      mr: "सर्व मालमत्ता"
    },
    before: {
      en: "Before",
      mr: "पूर्वी"
    },
    after: {
      en: "After",
      mr: "नंतर"
    },
    viewProjectDetails: {
      en: "View Project Details",
      mr: "प्रकल्पाचे तपशील पहा"
    },
    whatOurClientsSay: {
      en: "What Our Clients Say",
      mr: "आमचे ग्राहक काय म्हणतात"
    }
};