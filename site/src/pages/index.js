import React from "react";
import tw from "twin.macro";

const Header = tw.header`
  border-b
`;

const HeaderNav = ({ children }) => (
  <Header>
    <ul tw="flex">{children}</ul>
  </Header>
);

const HomeLink = tw.a`
  font-roboto font-bold text-gray-700 text-4xl hover:text-orange-700
`;

const HomeContainer = ({ children }) => (
  <li tw="mr-20">
    <HomeLink href="#">{children}</HomeLink>
  </li>
);

const Section = tw.li`
  mr-12 pt-4
`;

const SectionLink = tw.a`
  text-gray-700 hover:text-orange-700
`;

const SectionContainer = ({ children }) => (
  <Section>
    <SectionLink>{children}</SectionLink>
  </Section>
);

const backgroundImg = {
  backgroundImage: 'url("https://source.unsplash.com/random")',
};

export default function Home() {
  return (
    <>
      <HeaderNav>
        <HomeContainer>Myriam Tousignant</HomeContainer>
        <SectionContainer>Projets</SectionContainer>
        <SectionContainer>Livres d'artiste</SectionContainer>
        <SectionContainer>Publications</SectionContainer>
        <SectionContainer>Biographie &amp; démarche</SectionContainer>
        <SectionContainer>Presse</SectionContainer>
      </HeaderNav>

      {/* Project Card */}
      <div tw="max-w-sm w-1/2 lg:max-w-full lg:flex p-10">
        <div
          tw="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={backgroundImg}
          title="Les fenêtres qui parlent"
        ></div>
        <div tw="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div tw="text-gray-900 font-bold text-xl mb-2">
            Les fenêtres qui parlent
          </div>
          <p tw="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      {/*END Project Card */}

      {/* Project Card */}
      <div tw="max-w-sm w-1/2 lg:max-w-full lg:flex p-10">
        <div
          tw="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={backgroundImg}
          title="Les fenêtres qui parlent"
        ></div>
        <div tw="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div tw="text-gray-900 font-bold text-xl mb-2">
            Diffuser confiné.e
          </div>
          <p tw="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      {/*END Project Card */}

      {/* Project Card */}
      <div tw="max-w-sm w-1/2 lg:max-w-full lg:flex p-10">
        <div tw="md:flex">
          <div tw="md:flex-shrink-0">
            <img
              tw="rounded-lg md:w-56"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
          <div tw="mt-4 md:mt-0 md:ml-6">
            <div tw="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Projets
            </div>
            <a
              href="#"
              tw="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >
              Les fenêtres qui parlent
            </a>
            <p tw="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      {/*END Project Card */}
    </>
  );
}
