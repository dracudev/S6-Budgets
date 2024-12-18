import "./styles/CurrentBudgets.css";
import { CustomCard } from "../../components/CustomCard";
import { BudgetFilter } from "./BudgetFilter";
import { useBudget } from "../../contexts/useBudget";

export function CurrentBudgets() {
  const { filteredData } = useBudget();

  return (
    <div className="budget-container">
      <hr className="mt-3 mb-5 dotted-hr" />
      <div className="d-flex">
        <h2 className="ms-sm-3">
          <strong>Current budgets:</strong>
        </h2>
      </div>
      <div className="ms-auto me-3 budget-filter-container">
        <BudgetFilter />
      </div>
      <div className="w-100 mt-5 ">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <CustomCard key={index} className="card-current container mb-3">
              <div className="card-items">
                <div className="card-section">
                  <div className="d-flex flex-column align-items-center">
                    <h2>
                      <strong>{data.user}</strong>
                    </h2>
                    <p className="lead m-0">{data.email}</p>
                    <p className="lead m-0">{data.tel}</p>
                    <p className="lead m-0">{data.timestamp}</p>
                  </div>
                </div>

                <div className="card-section">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p className="m-0">
                      <strong>Contracted services:</strong>
                    </p>
                    <ul className="mt-2 d-flex flex-column">
                      {Object.keys(data.checkedItems).map((item) => {
                        if (data.checkedItems[item]) {
                          if (item === "web") {
                            const pages =
                              data.elements.pages > 0
                                ? `${data.elements.pages} pages`
                                : "";
                            const languages =
                              data.elements.languages > 0
                                ? `${data.elements.languages} languages`
                                : "";
                            const separator = pages && languages ? ", " : "";
                            return (
                              <li key={item}>
                                Web{" "}
                                {pages || languages
                                  ? `(${pages}${separator}${languages})`
                                  : ""}
                              </li>
                            );
                          } else {
                            return (
                              <li key={item}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                              </li>
                            );
                          }
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                </div>

                <div className="card-section">
                  <p className="lead m-0">
                    <strong>Total:</strong>
                  </p>
                  <h5>
                    <strong className="fs-1">{data.budget}</strong>€
                  </h5>
                </div>
              </div>
            </CustomCard>
          ))
        ) : (
          <p className="lead d-flex align-items-center justify-content-center">
            No current budgets
          </p>
        )}
      </div>
    </div>
  );
}
