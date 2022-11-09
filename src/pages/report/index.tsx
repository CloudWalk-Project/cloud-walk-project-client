import * as S from "./style";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { mockedUpdate } from "../../mocks/update";

const Report = () => {
  const updates = mockedUpdate;

  const downloadPdfDocument = () => {
    const input = document.getElementById("testId");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 100);
      pdf.save(`Report.pdf`);
    });
  };

  return (
    <S.reportMain>
      <S.reportContainer>
        <S.reportButton onClick={downloadPdfDocument}>
          Download Pdf
        </S.reportButton>
        <S.reportContent id="testId">
          <h2>Resultados</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">Usuário</th>
                <th scope="col">Canva</th>
                <th scope="col">Preço Antigo</th>
                <th scope="col">Preço Atual</th>
                <th scope="col">Status</th>
                <th scope="col">Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {updates.map((element) => (
                <tr>
                  <th scope="row">{element.user}</th>
                  <td>{element.canva}</td>
                  <td>{element.oldPrice}</td>
                  <td>{element.newPrice}</td>
                  <td>{element.atStatus}</td>
                  <td>{element.statusMessage}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colSpan="3">
                  Total de atualizações
                </th>
                <td colSpan="3">{updates.length}</td>
              </tr>
            </tfoot>
          </table>
        </S.reportContent>
      </S.reportContainer>
    </S.reportMain>
  );
};

export default Report;
