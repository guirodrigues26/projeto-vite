import { Cycles } from "../../components/Cycles";
import { MainForm } from "../../components/MainForm";
import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <Cycles />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}