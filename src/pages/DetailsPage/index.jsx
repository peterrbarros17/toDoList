import styles from "./DetailsPage.module.scss";

import { useNavigate, useParams } from "react-router-dom";
import Header from "components/Header";
import Button from "components/Button";

export default function DetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <section className={styles.detailsPageContainer}>
      <Header />
      <Button onClick={() => navigate(-1)}>Voltar</Button>
      <h1>{params.taskTitle}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        temporibus!
      </p>
    </section>
  );
}
