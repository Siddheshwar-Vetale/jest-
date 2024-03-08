import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

// const randomClasses = "text-red-800 border-2 bg-black";

// const focusClasses = "focus:outline-none focus:ring focus:ring-violet-300";

// const hoverClass = {
//     primary :"hover:bg-violet-600",
//     secondary : "hover:bg-green-600"
// }

// describe("Button conatin primary class", ()=>{
//     it("has primary style",()=>{
//         render(<Button />);
//         const button1 =screen.getByRole("button");
//         expect(button1).toHaveClass('primary');
//     })

//     it("Button conatin this random class",()=>{
//         render(<Button />);
//         const button1 =screen.getByRole("button");
//         expect(button1).toHaveClass(randomClasses);
//     })

//     it("Button conatin all focus class element",()=>{
//         render(<Button />);
//         const button1 =screen.getByRole("button");
//         expect(button1).toHaveClass(focusClasses);
//     })

//     it("Button conatin all focus class element",()=>{
//         render(<Button />);
//         const button1 =screen.getByRole("button");
//         expect(button1).toHaveClass(hoverClass.primary);
//         expect(button1).not.toHaveClass(hoverClass.secondary);
//     })

//     it("check the type of button is submit", () => {
//         render(<Button />);
//         const button1 = screen.getByRole("button");
//         expect(button1).toHaveAttribute("type", "submit");
//     })

//     it("Button fire onClick callback on button click event", () => {
//         const handleClick = jest.fn();
//         render(<Button onClick={handleClick} />);
//         const button1 = screen.getByRole("button");
//         expect(button1).toMatchSnapshot();
//       })

//       it("Button focuses on tab",() => {
//         render(<Button variant="primary" size="large"/>);
//         const focusButton = screen.getByRole("button");
//         userEvent.tab();
//         expect(focusButton).toHaveFocus();
//       })

//       it("value get by text", () => {
//         render(<Button />);
//         const button123 = screen.getByText('Hello');
//         expect(button123).toHaveAttribute("type", "submit");
//       })
// })

const variantClasses = {
  primaryClasses:
    "bg-blue-600 px-4 py-2 m-3 rounded-lg text-white font-medium border-1 border-solid border-blue-600",
  secondaryClasses:
    "bg-gray-600 px-4 py-2 m-3 rounded-lg text-white font-medium border-1 border-solid border-blue-600",
  tertaryClasses:
    "bg-white-900 px-4 py-2 m-3 rounded-lg font-medium border-2 border-solid border-black",
};
const sizeClasses = {
  smallClasses: "text-sm",
  mediumClasses: "text-6xl",
};

const focusclass = "focus:outline-none focus:ring focus:ring-violet-900"; 

const hoverclass = "hover:bg-violet-600";

describe("Testing Primary button component", () => {
  it("Should have small button size and button enabled attribute", () => {
    render(<Button variant="primary" size="small" disabled={false} />);
    const primaryBtn = screen.getByRole("button");

    expect(primaryBtn).toHaveClass(variantClasses.primaryClasses);
    expect(primaryBtn).not.toHaveClass(variantClasses.secondaryClasses);
    expect(primaryBtn).not.toHaveClass(variantClasses.tertaryClasses);
    expect(primaryBtn).toHaveClass(sizeClasses.smallClasses);
    expect(primaryBtn).not.toHaveClass(sizeClasses.mediumClasses);
    expect(primaryBtn).toBeEnabled();
    expect(primaryBtn).toHaveClass(focusclass);
    expect(primaryBtn).toHaveClass(hoverclass);
  });

  it("Should have medium button size and button enabled attribute", () => {
    render(<Button variant="primary" size="medium" disabled={false} />);
    const primaryBtn = screen.getByRole("button");

    expect(primaryBtn).toHaveClass(variantClasses.primaryClasses);
    expect(primaryBtn).not.toHaveClass(variantClasses.secondaryClasses);
    expect(primaryBtn).not.toHaveClass(variantClasses.tertaryClasses);
    expect(primaryBtn).not.toHaveClass(sizeClasses.smallClasses);
    expect(primaryBtn).toHaveClass(sizeClasses.mediumClasses);
    expect(primaryBtn).toBeEnabled();
    expect(primaryBtn).toHaveClass(focusclass);
    expect(primaryBtn).toHaveClass(hoverclass);
  });

  it("Should have medium button size and button disabled attribute", () => {
    render(<Button variant="primary" size="medium" disabled={true} />);
    const primaryDisabledBtn = screen.getByRole("button");

    expect(primaryDisabledBtn).toHaveClass(variantClasses.primaryClasses);
    expect(primaryDisabledBtn).not.toHaveClass(variantClasses.secondaryClasses);
    expect(primaryDisabledBtn).not.toHaveClass(variantClasses.tertaryClasses);
    expect(primaryDisabledBtn).not.toHaveClass(sizeClasses.smallClasses);
    expect(primaryDisabledBtn).toHaveClass(sizeClasses.mediumClasses);
    expect(primaryDisabledBtn).toBeDisabled();
    expect(primaryDisabledBtn).not.toHaveClass(focusclass);
    expect(primaryDisabledBtn).not.toHaveClass(hoverclass);
  });

  it("primary button should focus on tab", async () => {
    render(<Button variant="primary" size="medium" disabled={false}/>);

    const focusButton = screen.getByRole("button");

    await userEvent.tab();
    expect(focusButton).toHaveFocus();
  });
  
  it("primary button should prohibit onClick when button is disabled", () => {
    const handleClick = jest.fn();

    render(<Button variant="primary" size="medium" onClick={handleClick} disabled={true}/>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toBeCalled();
  });

  it("primary button should prohibit onClick when button is disabled", () => {
    const handleClick = jest.fn();

    render(<Button variant="primary" size="medium" onClick={handleClick} disabled={false}/>);
    
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toBeCalled();
  });

});

describe("Testing secondary button component", () => {
  it("Should have small button size and button enabled attribute", () => {
    render(<Button variant="secondary" size="small" disabled={false} />);
    const secondaryBtn = screen.getByRole("button");

    expect(secondaryBtn).not.toHaveClass(variantClasses.primaryClasses);
    expect(secondaryBtn).toHaveClass(variantClasses.secondaryClasses);
    expect(secondaryBtn).not.toHaveClass(variantClasses.tertaryClasses);
    expect(secondaryBtn).toHaveClass(sizeClasses.smallClasses);
    expect(secondaryBtn).not.toHaveClass(sizeClasses.mediumClasses);
    expect(secondaryBtn).toBeEnabled();
    expect(secondaryBtn).toHaveClass(focusclass);
    expect(secondaryBtn).toHaveClass(hoverclass);
  });

  it("Should have medium button size and button enabled attribute", () => {
    render(<Button variant="secondary" size="medium" disabled={false} />);
    const secondaryBtn= screen.getByRole("button");

    expect(secondaryBtn).not.toHaveClass(variantClasses.primaryClasses);
    expect(secondaryBtn).toHaveClass(variantClasses.secondaryClasses);
    expect(secondaryBtn).not.toHaveClass(variantClasses.tertaryClasses);
    expect(secondaryBtn).not.toHaveClass(sizeClasses.smallClasses);
    expect(secondaryBtn).toHaveClass(sizeClasses.mediumClasses);
    expect(secondaryBtn).toBeEnabled();
    expect(secondaryBtn).toHaveClass(focusclass);
    expect(secondaryBtn).toHaveClass(hoverclass);
  });

  it("Should have medium button size and button disabled attribute", () => {
    render(<Button variant="secondary" size="medium" disabled={true} />);
    const secondaryDisabledBtn = screen.getByRole("button");

    expect(secondaryDisabledBtn).not.toHaveClass(variantClasses.primaryClasses);
    expect(secondaryDisabledBtn).toHaveClass(variantClasses.secondaryClasses);
    expect(secondaryDisabledBtn).not.toHaveClass(variantClasses.tertaryClasses);
    expect(secondaryDisabledBtn).not.toHaveClass(sizeClasses.smallClasses);
    expect(secondaryDisabledBtn).toHaveClass(sizeClasses.mediumClasses);
    expect(secondaryDisabledBtn).toBeDisabled();
    expect(secondaryDisabledBtn).not.toHaveClass(focusclass);
    expect(secondaryDisabledBtn).not.toHaveClass(hoverclass);
  });

  it("secondary button should focus on tab", async () => {
    render(<Button variant="secondary" size="medium" disabled={false}/>);

    const focusButton = screen.getByRole("button");

    await userEvent.tab();
    expect(focusButton).toHaveFocus();
  });

  it("secondary button should prohibit onClick when button is disabled", () => {
    const handleClick = jest.fn();

    render(<Button variant="secondary" size="medium" onClick={handleClick} disabled={true}/>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toBeCalled();
  });

  it("secondary button should prohibit onClick when button is disabled", () => {
    const handleClick = jest.fn();

    render(<Button variant="secondary" size="medium" onClick={handleClick} disabled={false}/>);
    
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toBeCalled();
  });

});

describe("Testing tertary button component", () => {
  it("Should have small button size and button enabled attribute", () => {
    render(<Button variant="tertary" size="small" disabled={false} />);
    const tertaryBtn = screen.getByRole("button");

    expect(tertaryBtn).not.toHaveClass(variantClasses.primaryClasses);
    expect(tertaryBtn).not.toHaveClass(variantClasses.secondaryClasses);
    expect(tertaryBtn).toHaveClass(variantClasses.tertaryClasses);
    expect(tertaryBtn).toHaveClass(sizeClasses.smallClasses);
    expect(tertaryBtn).not.toHaveClass(sizeClasses.mediumClasses);
    expect(tertaryBtn).toBeEnabled();
    expect(tertaryBtn).toHaveClass(focusclass);
    expect(tertaryBtn).toHaveClass(hoverclass);
  });

  it("Should have medium button size and button enabled attribute", () => {
    render(<Button variant="tertary" size="medium" disabled={false} />);
    const tertaryBtn = screen.getByRole("button");

    expect(tertaryBtn).not.toHaveClass(variantClasses.primaryClasses);
    expect(tertaryBtn).not.toHaveClass(variantClasses.secondaryClasses);
    expect(tertaryBtn).toHaveClass(variantClasses.tertaryClasses);
    expect(tertaryBtn).not.toHaveClass(sizeClasses.smallClasses);
    expect(tertaryBtn).toHaveClass(sizeClasses.mediumClasses);
    expect(tertaryBtn).toBeEnabled();
    expect(tertaryBtn).toHaveClass(focusclass);
    expect(tertaryBtn).toHaveClass(hoverclass);
  });

  it("Should have medium button size and button disabled attribute", () => {
    render(<Button variant="tertary" size="medium" disabled={true} />);
    const tertaryDisabledBtn = screen.getByRole("button");

    expect(tertaryDisabledBtn).not.toHaveClass(variantClasses.primaryClasses);
    expect(tertaryDisabledBtn).not.toHaveClass(variantClasses.secondaryClasses);
    expect(tertaryDisabledBtn).toHaveClass(variantClasses.tertaryClasses);
    expect(tertaryDisabledBtn).not.toHaveClass(sizeClasses.smallClasses);
    expect(tertaryDisabledBtn).toHaveClass(sizeClasses.mediumClasses);
    expect(tertaryDisabledBtn).toBeDisabled();
    expect(tertaryDisabledBtn).not.toHaveClass(focusclass);
    expect(tertaryDisabledBtn).not.toHaveClass(hoverclass);
  });

  it("tertary button should focus on tab", async () => {
    render(<Button variant="tertary" size="medium" disabled={false}/>);

    const focusButton = screen.getByRole("button");

    await userEvent.tab();
    expect(focusButton).toHaveFocus();
  });

  it("tertary button should prohibit onClick when button is disabled", () => {
    const handleClick = jest.fn();

    render(<Button variant="tertary" size="medium" onClick={handleClick} disabled={true}/>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toBeCalled();
  });

  it("tertary button should prohibit onClick when button is disabled", () => {
    const handleClick = jest.fn();

    render(<Button variant="tertary" size="medium" onClick={handleClick} disabled={false}/>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toBeCalled();
  });

});
