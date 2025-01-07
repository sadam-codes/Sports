import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample() {
  const accordionItems = [
    {
      eventKey: "0",
      title: "1.Comment s'y iscrire ?",
      content: "les inscriptions sont ouvertes via les outils suivants:",
      contenttwo:
        "1. Via Application <<Rabat Animation>> disponible aur Andriod/playstore et Apple/ Applstore",
      contentthree: "2. Via la page <<",
      contentfour: " www.Rabatjeunesse.ma",
    },
    {
      eventKey: "1",
      title: "2.Comment suivre ma demand d'inscription ?",
      content: "les inscriptions sont ouvertes via les outils suivants:",
      contenttwo:
        "1. Via Application <<Rabat Animation>> disponible aur Andriod/playstore et Apple/ Applstore",
      contentthree: "2. Via la page <<",
      contentfour: " www.Rabatjeunesse.ma",
    },
    {
      eventKey: "2",
      title: "3.Quant aura lieu <<Rabat jeunesse>> ?",
      content: "les inscriptions sont ouvertes via les outils suivants:",
      contenttwo:
        "1. Via Application <<Rabat Animation>> disponible aur Andriod/playstore et Apple/ Applstore",
      contentthree: "2. Via la page <<",
      contentfour: " www.Rabatjeunesse.ma",
    },
    {
      eventKey: "3",
      title: "4.Comment y participer ?",
      content: "les inscriptions sont ouvertes via les outils suivants:",
      contenttwo:
        "1. Via Application <<Rabat Animation>> disponible aur Andriod/playstore et Apple/ Applstore",
      contentthree: "2. Via la page <<",
      contentfour: " www.Rabatjeunesse.ma",
    },
    {
      eventKey: "4",
      title: "5.Ou se deroulera les competitions ?",
      content: "les inscriptions sont ouvertes via les outils suivants:",
      contenttwo:
        "1. Via Application <<Rabat Animation>> disponible aur Andriod/playstore et Apple/ Applstore",
      contentthree: "2. Via la page <<",
      contentfour: " www.Rabatjeunesse.ma",
    },
    {
      eventKey: "5",
      title: "6.Existe-t-il les frais d'insriptions ?",
      content: "les inscriptions sont ouvertes via les outils suivants:",
      contenttwo:
        "1. Via Application <<Rabat Animation>> disponible aur Andriod/playstore et Apple/ Applstore",
      contentthree: "2. Via la page <<",
      contentfour: " www.Rabatjeunesse.ma",
    },
  ];

  return (
    <Container className="widthset py-5">
    <h1 className="foire-heading text-center py-4">FOIRE AUX QUESTIONS</h1>
      <Accordion>
        {accordionItems.map((item) => (
          <Accordion.Item
            className="p-2 border-0"
            key={item.eventKey}
            eventKey={item.eventKey}
          >
            <Accordion.Header className="setbgcolor">{item.title}</Accordion.Header>
            <Accordion.Body className="setcoloring">
              {item.content} <br /> {item.contenttwo}
              <br /> {item.contentthree}
              <span className="text-danger">{item.contentfour}</span>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default AllCollapseExample;
