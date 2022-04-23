import styled from "styled-components";
import { motion, Variants } from "framer-motion";

// done
export const Mark = styled.span`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
transition: .4s;
border-radius: 34px;
&:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}
`;
//done
export const MarkActive = styled(motion.span)`
  border-radius: 34px;
  &:before {
    border-radius: 50%;
  }
`;

//done
export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked {
    + {
      .slider {
        background-color: #2196F3;
        &:before {
          transform: translateX(26px);
        }
      }
    }
  }
  &:focus {
    + {
      .slider {
        box-shadow: 0 0 1px #2196F3;
      }
    }
  }

`;
// done
export const Label = styled.label`
position: relative;
display: inline-block;
width: 60px;
height: 34px;
`;


export const Wrapper = styled.div`
  inline-size: 20px;
  block-size: 20px;
`;

export const animation: Variants = {
  visible: {
    transform: "translateX(26px)",
    
  },
  hidden: {
    transform: "translateX(0px)",
  },
};
