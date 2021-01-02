import LText from "../../src/components/input/LText";
import { mount } from "@vue/test-utils";

describe("text input", () => {
	it("Do not show any error message", () => {
		const wrapper = mount(LText);
		expect(wrapper.find("[data-test=input-error-message]").exists()).toBe(
			false
		);
	});

	describe("Disable input", () => {
		const wrapper = mount(LText, {
			propsData: {
				disabled: true
			}
		});

		it("Has 'input-field-disabled' class", () => {
			expect(
				wrapper.find("[data-test=input-field]").classes("input-field-disabled")
			).toBe(true);
		});

		it("Has 'disabled' attribute in input", () => {
			expect(
				wrapper.find("[data-test=input-field]").attributes("disabled")
			).toBe("disabled");
		});
	});

	describe("Error in input and message section", () => {
		const wrapper = mount(LText, {
			propsData: {
				error: {
					show: true
				}
			}
		});

		it("Red color border on input", () => {
			expect(
				wrapper.find("[data-test=input-field]").classes("input-error")
			).toBe(true);
		});

		it("Show empty error message", () => {
			expect(wrapper.find("[data-test=input-error-message]").exists()).toBe(
				true
			);
		});

		it("Check error with message", async () => {
			await wrapper.setProps({
				error: {
					show: true,
					message: "Some error message"
				}
			});

			expect(wrapper.find("[data-test=input-error-message]").text()).toBe(
				"Some error message"
			);
		});
	});
});