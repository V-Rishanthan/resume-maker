import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">

          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Rich Resume
          </h1>
        </div>

        {isSignedIn ? (
          <div className="flex gap-4 items-center">
            <Link to={"/dashboard"}>
              <Button variant="outline" className="font-medium hover:bg-primary/5 transition-colors">
                Dashboard
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border border-border"
                }
              }}
            />
          </div>
        ) : (
          <Link to={"/auth/sign-in"}>
            <Button className="font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
