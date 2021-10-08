import React from 'react';
import './WaveBG.css';
import { Container } from '../Container/Container';

const POSITION = ['center', 'start', 'end'];

export const WaveBG = ({
  position,
  src,
  title,
  children,
}) => {
  const checkBGImagePos = POSITION.includes(position)
    ? 'heroImage--' + position
    : 'heroImage--' + POSITION[0];

  return (
    <div className="wave-wrapper">
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1199 500" preserveAspectRatio="none">
          <path opacity="1" fill="#98D4FF" stroke="#98D4FF" d="m0.2027,434.23112c55.35456,-130.4081 149.88505,-183.73979 221.37174,-189.15197c71.48669,-5.41218 114.42178,33.67301 188.22083,0.19023c73.79905,-33.48278 96.93505,-166.41554 156.11201,-183.69887c59.17696,-17.28333 91.92638,35.55152 145.77427,61.77014c53.84788,26.21862 104.03483,9.81682 142.74692,-11.14221c38.71209,-20.95903 73.9875,-67.55404 161.05768,-60.28972c87.07019,7.26432 124.8411,80.06406 184.54099,161.68947l-0.4788,-213.59819l-1199.54834,0l0.2027,434.23112z" />
          <path opacity="1" fill="#CBE9FF" stroke="#CBE9FF" d="m0.20254,418.519c55.31063,-130.4081 162.16046,-189.36327 220.25565,-200.3295c58.09519,-10.96623 107.02139,19.81266 180.76187,-13.67012c73.74048,-33.48278 100.10812,-132.91554 156.23812,-154.19887c56.13,-21.28333 101.35343,16.80152 155.15858,43.02014c53.80515,26.21862 86.20227,7.56682 127.88364,-11.39221c41.68137,-18.95903 89.17878,-49.55404 177.17987,-41.28972c88.00109,8.26432 118.74203,61.81406 181.39454,138.43947l-0.47842,-179.09819l-1198.59639,0l0.20254,418.519z" />
          <path opacity="1" fill="#FFF" stroke="#FFF" d="m0.38388,404.44938c55.31063,-130.13759 183.8738,-196.68743 255.69872,-199.189c71.82492,-2.50157 78.53573,8.11193 150.92486,-27.94455c72.38913,-36.05648 104.10811,-130.64398 159.23812,-139.90806c55.13,-9.26407 88.35343,18.76252 145.15858,38.9392c56.80515,20.17668 76.20227,4.55735 120.88364,-10.37065c44.68137,-14.928 98.17878,-40.46992 186.17987,-32.22274c88.00109,8.24718 118.74203,51.70658 181.39454,128.17305l-0.47842,-161.76195c-399.67219,-0.14006 -799.34437,-0.28011 -1199.01656,-0.42017l0.01665,404.70487z" />
        </svg>
      </div>
      <div class="wave-title">{title}</div>
      <Container d="container--row">
        {children}
        <img class={checkBGImagePos} src={src} alt="Wave Background" />
      </Container>
    </div>
  )
};