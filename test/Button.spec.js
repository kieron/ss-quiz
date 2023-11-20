import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("renders correctly with label", () => {
    const label = "Click me";
    const wrapper = mount(Button, {
      propsData: {
        label,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find(".middle").exists()).toBe(true);
    expect(wrapper.find(".none").exists()).toBe(true);
    expect(wrapper.find(".center").exists()).toBe(true);
    expect(wrapper.find(".rounded-lg").exists()).toBe(true);
    expect(wrapper.find(".border-4").exists()).toBe(true);
    expect(wrapper.find(".text-white").exists()).toBe(true);
    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.find("span").text()).toBe(label);
  });

  it("emits click event when button is clicked", async () => {
    const wrapper = mount(Button);

    // Simulate a button click
    await wrapper.find("button").trigger("click");

    // Assert that the click event was emitted
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  // You can add more tests for different scenarios and interactions
});
