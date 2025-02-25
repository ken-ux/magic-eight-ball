import { ThreeElements } from "@react-three/fiber";
import { SetStateAction } from "react";

export type SphereProps = ThreeElements["mesh"] & {
  setTriangleVisible: React.Dispatch<SetStateAction<boolean>>;
};

export type TriangleProps = ThreeElements["mesh"] & {
  triangleVisible: boolean;
};
