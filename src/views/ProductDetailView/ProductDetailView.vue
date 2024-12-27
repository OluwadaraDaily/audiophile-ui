<template>
  <main>
    <section class="w-[90%] mx-auto my-10">
      <div class="mb-6">
        <button @click="goBack" class="border-none outline-none text-black opacity-50">Go Back</button>
      </div>
      <detailed-product-item
        :product="product"
      />
      <!-- Featured Paragraph and Box Items -->
      <div class="flex flex-col lg:flex-row my-10 lg:gap-14">
        <div class="lg:basis-[60%]">
          <h6 class="h6 uppercase mb-4 lg:h4">features</h6>
          <div
            v-for="featureParagraph in product.features"
            :key="featureParagraph"
          >
            <p class="p mb-8 opacity-50">
              {{ featureParagraph }}
            </p>
          </div>
        </div>
        <div class="lg:basis-[40%]">
          <h6 class="h6 uppercase mb-4 lg:h4">in the box</h6>
          <div
            v-for="boxItem in product.inTheBox"
            :key="`${boxItem.item}${boxItem.quantity}${product.name.substring(4)}`"
          >
            <div class="flex items-center gap-6 mb-2">
              <p class="p text-primary font-bold">{{ boxItem.quantity }}x</p>
              <p class="p font-medium opacity-50">{{ boxItem.item }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Featured Images -->
      <div class="my-10 grid gap-4 md:gap-5 lg:gap-8 md:grid-cols-2 md:grid-rows-[174px_174px] lg:grid-rows-[280px_280px]">
        <div
          v-for="(_, index) in product.featuredImages"
          class="h-[174px] lg:h-[280px]"
          :class="{
            'h-[368px] lg:h-[592px]': (index + 1 === product.featuredImages.length),
            'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2': index === 0,
            'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3': index === 1,
            'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3': index === 2,
          }"
        >
          <img 
            :src="imageSources[index].value"
            class="w-full h-full object-cover rounded-md"
            :alt="`${product.name} featured image ${index + 1}`"
          />
        </div>
      </div>
      <!-- "You may also like" section -->
       <div class="my-12 lg:my-[70px]">
         <you-may-also-like
           :product="product"
         />
       </div>
      <div class="my-12 lg:my-[70px]">
        <categories-menu/>
      </div>
      <highlight-banner/>
    </section>
  </main>  
</template>


<script setup lang="ts">
// Imports
import { reactive, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useImageLoader } from "@/composables/useImageLoader";
import { ProductProps } from "@/components/atoms/ProductItem/types";
import { earphonesData, headphonesData, speakersData } from "@/data/products";
import YouMayAlsoLike from "@/components/atoms/YouMayAlsoLike/YouMayAlsoLike.vue";
import DetailedProductItem from "@/components/atoms/DetailedProductItem/DetailedProductItem.vue";
import CategoriesMenu from "@/components/molecules/CategoriesMenu/CategoriesMenu.vue";
import HighlightBanner from '@/components/molecules/HighlightBanner/HighlightBanner.vue';


const route = useRoute();
const router = useRouter();

// Set product value
let product = reactive<ProductProps>({
  name: "",
  description: "",
  isNewProduct: false,
  imgSrc: "",
  tag: "",
  link: "",
  price: 0,
  features: ['', ''],
  inTheBox: [ { item: '', quantity: '0' } ],
  featuredImages: ['']
});

const dataByCategory: Record<string, ProductProps[]> = {
  headphones: headphonesData,
  earphones: earphonesData,
  speakers: speakersData,
};

const getDataByCategory = (category: string): ProductProps[] => {
  return dataByCategory[category] || [];
};

const setProductValue = (data: ProductProps[], tag: string): ProductProps => {
  const foundProduct = data.find((p) => p.tag === tag);
  if (!foundProduct) {
    throw new Error(`Product with tag "${tag}" not found.`);
  }
  return foundProduct;
};

watch(() => route.params,
  async () => {
    const category = route.params.category as string;
    const tag = route.params.id as string;
    const data = getDataByCategory(category);

    const newProduct = setProductValue(data, tag);
    Object.assign(product, newProduct);
  },
  { immediate: true }
)

const goBack = () => {
  const segments = route.path.split('/');
  if (segments.length > 2) {
    const parentPath = segments.slice(0, -1).join('/'); //Remove last segment
    router.push(parentPath);
  } else {
    console.warn('Cannot go back, no parent path found!');
  }
};

// Create an array to store image sources
const imageSources = ref(product.featuredImages.map(() => ref<string | undefined>('')));
watchEffect(() => {
  product.featuredImages.forEach((featureImage, index) => {
    const { imageSrc } = useImageLoader(featureImage);
    imageSources.value[index] = imageSrc; // Assign the reactive ref directly
  });
});
</script>