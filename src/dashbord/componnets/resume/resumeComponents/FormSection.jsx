import React, { useState } from "react";
import PersonalDetails from "../../forms/PersonalDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import Summery from "../../forms/Summery";
import Experince from "../../forms/Experince";
import Education from "../../forms/Education";
import Skills from "../../forms/Skills";
import { Link } from "react-router-dom";
import ThemeSelector from "../ThemeSelector";

const FormSection = () => {
  const [activeFormIndex, SetActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link to={"/dashboard"}>
            <Button>
              <Home />
            </Button>
          </Link>

          <div>
            <ThemeSelector />
          </div>
        </div>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => SetActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            className="flex gap-2 "
            size="sm"
            onClick={() => SetActiveFormIndex(activeFormIndex + 1)}
            disabled={!enableNext}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Details  */}
      {activeFormIndex == 1 ? (
        <PersonalDetails enableNext={(v) => setEnableNext(v)} />
      ) : null}
      {/* Summery */}
      {activeFormIndex == 2 ? <Summery /> : null}

      {/* Experience */}
      {activeFormIndex == 3 ? <Experince /> : null}

      {/* Education */}
      {activeFormIndex == 4 ? <Education /> : null}
      {/* Skills */}

      {activeFormIndex == 5 ? <Skills /> : null}
    </div>
  );
};

export default FormSection;
