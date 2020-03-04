import { t, hasComplexString } from "helpers";

describe("helpers", () => {
  describe("hasComplexString", () => {
    it("should detect a complex string", () => {
      expect(hasComplexString("{abc.def}")).toEqual(true);
      expect(hasComplexString("this is also a complex one {abc.def}")).toEqual(
        true
      );
    });
  });
  describe("trans", () => {
    it("should return the key with '{}' if the translation does not exist", () => {
      expect(t("pere")).toEqual("{pere}");
    });
    it("should return simple keys", () => {
      expect(t("global.bride")).toEqual("Marta");
      expect(t("global.groom")).toEqual("Pere");
      expect(t("santMarc.title")).toEqual("Recepción");
    });
    describe("should handle nested keywords", () => {
      it("basic", () => {
        expect(t("santaMaria.title")).toEqual("Ceremonia");
      });
      it("more complex", () => {
        expect(
          t("santaMaria.title", {
            global: { dog: "cute" },
            santaMaria: { title: "hello my {global.dog} baby" }
          })
        ).toEqual("hello my cute baby");
      });
    });
  });
});
