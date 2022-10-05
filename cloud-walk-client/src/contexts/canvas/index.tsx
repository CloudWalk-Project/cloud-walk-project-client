import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Canva } from "../../types/interfaces";
import { api } from "../../service";
import { useAuth } from "../auth";

interface CanvasProviderProps {
  children: ReactNode;
}

interface CanvasProviderData {
  canvas: Canva[];
  handleGetCanvas: () => void;
}

const CanvasContext = createContext<CanvasProviderData>(
  {} as CanvasProviderData
);

export const CanvasProvider = ({ children }: CanvasProviderProps) => {
  // const { logged } = useAuth();

  const [canvas, setCanvas] = useState<Canva[]>([]);

  const handleGetCanvas = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/canva", headers).then((res) => {
      setCanvas(res.data);
    });
  };

  // useEffect(() => {
  //   if (logged) handleGetCanvas();
  // }, [logged]);
  useEffect(() => {
    handleGetCanvas();
  }, []);
  // handleGetCanvas();

  return (
    <CanvasContext.Provider value={{ canvas, handleGetCanvas }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
