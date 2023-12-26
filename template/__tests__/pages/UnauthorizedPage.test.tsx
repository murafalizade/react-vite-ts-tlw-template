import {render,screen} from "@testing-library/react";
import UnauthorizedPage from "../../src/app/pages/UnauthorizedPage.tsx";
import '@testing-library/jest-dom';

describe("Unauthorized Component", ()=>{

    test("Component is successfully rendered", ()=>{
        render(
            <UnauthorizedPage />
        );

        const title = screen.getByText(/authPageTitle/i)
        const description = screen.getByText(/authPageDescription/i)

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    })
})