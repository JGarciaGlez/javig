/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_54R0pCVJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const SEO_TITLE$1 = "Portfolio Javier Garcia  - Web Developer";
const SEO_DESCRIPTION$1 = "Discover the world through my creative eyes. Explore my personal portfolio where design and development converge to bring unique experiences to life. Get to know Javier García and dive into a visual journey capturing the essence of my passion and skills. Get inspired, and let me guide you in the fascinating universe of creative design and development!";
const TITLE$1 = "Hello, I'm Javier García.";
const TITLE_2$1 = "+2 years of experience. I am a web developer, specialized in FrontEnd.";
const english = {
	SEO_TITLE: SEO_TITLE$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	TITLE: TITLE$1,
	TITLE_2: TITLE_2$1
};

const SEO_TITLE = "Javier Garcia  Portafolio- Desarrollador Web";
const SEO_DESCRIPTION = "Descubre el mundo a través de mis ojos creativos. Explora mi portafolio personal, donde el diseño y el desarrollo se fusionan para dar vida a experiencias únicas. Conoce  a Javier García  y sumérgete en un viaje visual que captura la esencia de mi pasión y habilidades. ¡Inspírate y déjame ser tu guía en el fascinante universo del diseño y desarrollo creativo!";
const TITLE = "Hola, Soy Javier García.";
const TITLE_2 = "+2 años de experiencia. Soy desarrollador web ,especializado en FrontEnd.";
const spanish = {
	SEO_TITLE: SEO_TITLE,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	TITLE: TITLE,
	TITLE_2: TITLE_2
};

const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es"
};
const getI18N = ({
  currentLocale = "es"
}) => {
  if (currentLocale === LANGUAGES.ENGLISH)
    return english;
  if (currentLocale === LANGUAGES.SPANISH)
    return spanish;
  return spanish;
};

const projects = [
	{
		id: 5,
		name: "Dragons Fc",
		description: "Created with Nextjs,Html5,Tailwindcss.Optimized for SEO and performance",
		github: "https://github.com/JGarciaGlez/dragonsfc",
		url: "https://dragonsfc.vercel.app"
	},
	{
		id: 6,
		name: "Twitter Timeline Clone",
		description: "Created with Reactjs,Html5,Css3",
		github: "https://github.com/JGarciaGlez/eL1TdHfWdKkFqnMNH4Jt",
		url: "https://github.com/JGarciaGlez/eL1TdHfWdKkFqnMNH4Jt"
	},
	{
		id: 7,
		name: "Portfolio-2",
		description: "Created with Reactjs,Html5,Css3",
		github: "https://github.com/JGarciaGlez/portfolio-javi",
		url: "https://javiergarciaweb.netlify.app"
	},
	{
		id: 1,
		name: "Weather App",
		description: "Created with Reactjs,Html5,Css3",
		github: "https://github.com/JGarciaGlez/weatherapp",
		url: "https://weatherappjvi.netlify.app/"
	},
	{
		id: 2,
		name: "Gif App",
		description: "Created with Reactjs,Html5,Css3(Bootstrap)",
		github: "https://github.com/JGarciaGlez/Gif-App",
		url: "https://giflyapp.netlify.app/"
	},
	{
		id: 3,
		name: "Dragon Ball Web",
		description: "Created with  Reactjs,Html5,Css3",
		github: "https://github.com/JGarciaGlez/dragonballreact",
		url: "https://dragonballreact.netlify.app/"
	},
	{
		id: 4,
		name: "AutoLikedinPro",
		description: "Created with django to automated add people in likendin...",
		github: "https://github.com/JGarciaGlez/autolikendinpro",
		url: ""
	}
];

const $$Astro$7 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path d="M4.5 19.5a3 3 0 0 1 0-4.24L6.76 13A3 3 0 0 1 11 13a3 3 0 0 1 0 4.24L8.74 19.5a3 3 0 0 1-4.24 0ZM17.24 11 20 8.24A3 3 0 0 0 20 4a3 3 0 0 0-4.24 0L13 6.76A3 3 0 0 0 13 11a3 3 0 0 0 4.24 0Z" style="fill:#2ca9bc;stroke-width:2"></path><path d="M4.5 19.5h0a3 3 0 0 1 0-4.24L6.76 13A3 3 0 0 1 11 13h0a3 3 0 0 1 0 4.24L8.74 19.5a3 3 0 0 1-4.24 0ZM17.24 11 20 8.24A3 3 0 0 0 20 4h0a3 3 0 0 0-4.24 0L13 6.76A3 3 0 0 0 13 11h0a3 3 0 0 0 4.24 0ZM10 14l4-4" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"></path></svg>`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/icons/Link.astro", void 0);

const $$Astro$6 = createAstro();
const $$GithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`<!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} fill="currentColor" viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"> <g> <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#545454"></path> </g> </svg>`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/icons/GithubIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { name, description, github, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-wrap text-center justify-center md:justify-between items-center w-[300px] h-[300px]  md:w-[220px] md:h-[300px] mx-auto bg-black shadow-sm rounded-xl hover:bg-[#0b0b0b]"> <article class="text-pretty break-all max-w-[230px] max-h-[250px] hover:cursor-pointer"> <h1 class="text-3xl text-white font-bold text-center pl-5">${name}</h1> <div class="text-left pl-4 text-white mt-5 pb-3 h-20"> ${description}.
</div> </article> <section class="size-10 flex text-center justify-around w-full pt-8"> <span class="flex justify-between items-center"> <a${addAttribute(github, "href")} target="_blank" rel="nofollow noreferrer" class="size-6"> ${renderComponent($$result, "GithubIcon", $$GithubIcon, {})} </a> </span> <span class="flex flex-row justify-between items-center"> <a${addAttribute(url, "href")} target="_blank" rel="nofollow noreferrer" class="size-6"> ${renderComponent($$result, "Link", $$Link, {})} </a> </span> </section> </main>`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/components/ProjectCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$LikendinIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LikendinIcon;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"> <path fill="#0078d4" d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5	C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0
 	c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z"></path></svg>`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/icons/LikendinIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<header class="w-[600px] lg:w-[740px] mx-auto py-20 flex flex-col justify-center "> <picture> <img src="https://res.cloudinary.com/dzzfcox7t/image/upload/f_auto,q_auto/yclclagufzd2otgase0m" alt="header" class="rounded-full size-12 mb-5 ml-5 md:ml-0"> </picture> <h1 class="text-center text-white text-5xl font-bold ">${i18n.TITLE} </h1> <h2 class="pt-5 text-xl break-words pb-20 text-slate-400 text-center md:text-justify p"> ${i18n.TITLE_2} </h2> <ul class="flex gap-12 flex-row justify-center"> <li> <a href="https://www.linkedin.com/in/javiergarciagonzalez-frontenddeveloper/" target="_blank" class="bg-white text-black p-1 rounded-full font-bold flex items-center justify-center hover:bg-blue-100 hover:scale-90 hover:transition-all hover:duration-300">${renderComponent($$result, "LikendinIcon", $$LikendinIcon, { "class": "size-7" })} <span class="pl-2 tracking-widest">Likendin</span></a> </li> <li> <a href="https://www.linkedin.com/in/javiergarciagonzalez-frontenddeveloper/" target="_blank" class="bg-white text-black p-1  rounded-full font-bold flex items-center justify-center hover:bg-gray-300 hover:scale-90 hover:transition-all hover:duration-300">${renderComponent($$result, "GithubIcon", $$GithubIcon, { "class": "size-7" })} <span class="pl-2 tracking-widest">Github</span></a> </li> </ul> </header>`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-[600px] grid grid-cols-1 md:grid-cols-3 mx-auto items-center justify-between gap-20 pb-44 "> ${projects?.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </main> ` })}`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file$1 = "/Users/javiergarciagonzalez/Desktop/portfolio/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-[600px] grid grid-cols-1 md:grid-cols-3 mx-auto items-center justify-between gap-20 pb-44"> ${projects?.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </main> ` })}`;
}, "/Users/javiergarciagonzalez/Desktop/portfolio/src/pages/en/index.astro", void 0);

const $$file = "/Users/javiergarciagonzalez/Desktop/portfolio/src/pages/en/index.astro";
const $$url = "/en";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
