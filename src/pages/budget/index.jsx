import { HeaderBanner } from "../../components/HeaderBanner";
import { StandardButton } from "../../components/StandardButton";
import { BudgetForm } from "./BudgetForm";
import { Link } from "react-router-dom";
import { ClientDataForm } from "./ClientDataForm";
import { FaHome } from "react-icons/fa";
import "./index.css";
import { useBudget } from "../../contexts/useBudget";
import { CurrentBudgets } from "./CurrentBudgets";

export function Budget() {
  const { checkedItems } = useBudget();
  return (
    <>
      <HeaderBanner>
        <h1 className="text-center text-white">Get the best quality</h1>
      </HeaderBanner>

      <Link to="/" style={{ textDecoration: "none" }}>
        <StandardButton className="my-4 d-flex align-items-center">
          <FaHome className="me-2" /> Home
        </StandardButton>
      </Link>

      <BudgetForm></BudgetForm>

      {(checkedItems.web || checkedItems.seo || checkedItems.ads) && (
        <ClientDataForm />
      )}

      <CurrentBudgets></CurrentBudgets>
    </>
  );
}
