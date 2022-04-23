import styled from "styled-components";
import CheckIcon from "./icons/check.svg";
import { motion, Variants } from "framer-motion";

export const Mark = styled.span`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  background-color: #f5f5f5;
  inset-inline-start: 0;
  border: 2px solid transparent;
  flex-shrink: 0;
`;

export const Check = styled(CheckIcon)``;

export const MarkActive = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-self: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  inline-size: 0;
  block-size: 0;
  z-index: -100;

`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
`;

export const Wrapper = styled.div`
  inline-size: 20px;
  block-size: 20px;
`;

