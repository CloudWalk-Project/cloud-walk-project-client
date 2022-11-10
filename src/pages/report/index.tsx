import * as S from "./style";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { mockedUpdate } from "../../mocks/update";
import { useNavigate, useParams } from "react-router-dom";
import { uploadService } from "../../services/uploadService";
import { useEffect, useState } from "react";
import loginService from "../../services/authService";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { reportObj } from "../../types/interfaces";

const Report = () => {
  const id = Number(useParams().id);
  const jwt = localStorage.getItem("jwt");
  const [items, setItems] = useState<reportObj[]>([
    // {
    //   canva_id: 0,
    //   canva_name: "",
    //   created_at: "2022-11-10T00:28:03.581Z",
    //   id: 0,
    //   new_price: 0,
    //   old_price: 0,
    //   status_message: "",
    //   user_name: "",
    // },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  let userRole: string;
  useEffect(() => {
    getLoggedUser();
    getBatch();
  }, []);

  const getLoggedUser = async () => {
    const response = await loginService.loggedUser();
    userRole = response.role;
    if (!jwt || userRole != "Owner") {
      toast.error("Acesso negado.");
      navigate("/");
    }
  };

  const getBatch = async () => {
    setLoading(true);
    const response = await uploadService.getBatchById(id);
    if (response.data) {
      setItems(response.data);
    } else {
      toast.error(response.response.data.message);
    }
    console.log(response.data);
    setLoading(false);
  };

  const updates = mockedUpdate;
  const numberofups = updates.length;
  const downloadPdfDocument = () => {
    const input = document.getElementById("testId");
    if (input) {
      html2canvas(input).then((canvas: any) => {
        const imgData = canvas.toDataURL("image/jpeg");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0, 210, 33 * numberofups);
        pdf.save(`Report.pdf`);
      });
    }
  };

  return (
    <S.reportMain>
      {loading ? (
        <Loading />
      ) : (
        <S.reportContainer>
          <S.reportContent id="testId">
            <h2>Resultados</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Canva</th>
                  <th scope="col">Preço Antigo</th>
                  <th scope="col">Preço Atual</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((element) => (
                  <tr>
                    <th scope="row">{element.canva_name}</th>
                    <td>{element.old_price}</td>
                    <td>{element.new_price}</td>
                    <td>{element.status_message}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan={3} id="who">
                    Atualizados por: <b>{items.length>0? items[0].user_name:""}</b> Em: <b>{items.length>0? items[0].created_at.split("T")[0]:""}</b> {}
                  </th>
                  <th scope="row" colSpan={1}>
                    Total de atualizações: {items.length}
                  </th>
                </tr>
              </tfoot>
            </table>
          </S.reportContent>
          <S.reportButton onClick={downloadPdfDocument}>
            Download Pdf
          </S.reportButton>
        </S.reportContainer>
      )}
    </S.reportMain>
  );
};

export default Report;
