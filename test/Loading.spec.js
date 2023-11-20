import { mount } from "@vue/test-utils";
import Loading from "@/components/Loading.vue";

describe("Loading.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(Loading);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".flex").exists()).toBe(true);
    expect(wrapper.find(".justify-center").exists()).toBe(true);
    expect(wrapper.find(".items-center").exists()).toBe(true);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toContain("puff.svg");
    expect(wrapper.find("img").attributes("alt")).toBe("Loading");
  });
});
