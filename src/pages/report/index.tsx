import * as S from "./style";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { mockedUpdate } from "../../mocks/update";

const Report = () => {
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
      <S.reportContainer>
        <S.reportButton onClick={downloadPdfDocument}>
          Download Pdf
        </S.reportButton>
        <S.reportContent id="testId">
          <h2>Resultados</h2>
          <table>
            <thead>
              <tr>
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
                  <th scope="row">{element.canva}</th>
                  <td>{element.oldPrice}</td>
                  <td>{element.newPrice}</td>
                  <td>{element.atStatus}</td>
                  <td>{element.statusMessage}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colSpan={3} id="who">
                  Atualizado por: {updates[0].user}
                </th>
                <th scope="row" colSpan={1}>
                  Total de atualizações:
                </th>
                <td colSpan={1}>{updates.length}</td>
              </tr>
            </tfoot>
          </table>
        </S.reportContent>
      </S.reportContainer>
    </S.reportMain>
  );
};

export default Report;
