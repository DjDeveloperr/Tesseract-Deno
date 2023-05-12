import { getLanguages, getVersion, recognize } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test({
  name: "Get Version",
  sanitizeResources: false,
  async fn() {
    assertEquals(typeof (await getVersion()), "string");
  },
});

Deno.test({
  name: "Get Languages",
  sanitizeResources: false,
  async fn() {
    assertEquals(typeof (await getLanguages()), "object");
  },
});

Deno.test({
  name: "Recognize",
  sanitizeResources: false,
  async fn() {
    assertEquals((await recognize("testdata/deno.png")).trim(), "Deno");
  },
});

Deno.test({
  name: "Recognize with language options",
  sanitizeResources: false,
  async fn() {
    assertEquals(
      (await recognize("testdata/deno.png", {
        lang: "eng",
        config: {
          preserve_interword_spaces: "1",
        },
      })).trim(),
      "Deno",
    );
  },
});
