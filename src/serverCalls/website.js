"use server";

// Timeouts for revalidation (in seconds)
const REVALIDATE_5_MIN = 5 * 60; // 300 seconds
const REVALIDATE_15_MIN = 15 * 60; // 900 seconds
const REVALIDATE_1_HOUR = 60 * 60; // 3600 seconds
const REVALIDATE_12_HOURS = 12 * 60 * 60; // 43200 seconds
const REVALIDATE_24_HOURS = 24 * 60 * 60; // 86400 seconds
const REVALIDATE_1_WEEK = 7 * 24 * 60 * 60; // 604800 seconds

export async function fetchBanners() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/carousal/home`,
      {
        next: { revalidate: REVALIDATE_24_HOURS }, // Cache
      }
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    return data?.data?.carousals || [];
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

export async function fetchArticles() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`, {
      next: { revalidate: REVALIDATE_24_HOURS }, // Cache
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    return data?.data?.articles || [];
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

export async function fetchSingleArticle(articleId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/article/${articleId}`,
    {
      next: { revalidate: REVALIDATE_24_HOURS },
    } //Cache
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const data = await res.json();
  return data?.data?.article || {};
}

export async function fetchFeedbacks() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/client-reviews`,
      {
        next: { revalidate: REVALIDATE_24_HOURS }, // Cache
      }
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    return data?.data?.reviews || [];
  } catch (error) {
    console.error("Failed to fetch feedbacks:", error);
    return [];
  }
}

export async function fetchServices() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comp-services`,
      {
        next: { revalidate: REVALIDATE_24_HOURS }, // Cache
      }
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    return data?.data?.services || [];
  } catch (error) {
    console.error("Failed to fetch feedbacks:", error);
    return [];
  }
}

export async function fetchSingleServices(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comp-services/${id}`,
      {
        next: { revalidate: REVALIDATE_24_HOURS }, // Cache
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch service data");
    }

    const data = await res.json();
    return data?.data?.service;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchPrivacyPolicy() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/privacy-policy`,
    {
      next: {
        revalidate: REVALIDATE_24_HOURS,
      }, //Cache
    }
  );

  let content = await data.json();
  return content?.data?.content;
}

export async function fetchTermsAndConditions() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/terms-and-conditions`,
    {
      next: {
        revalidate: REVALIDATE_24_HOURS,
      }, //Cache
    }
  );

  let content = await data.json();
  return content?.data?.content;
}

export async function fetchAboutSection() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/about-us`,
    {
      next: {
        revalidate: REVALIDATE_24_HOURS,
      }, //Cache
    }
  );

  let content = await data.json();
  return content?.data?.content;
}

export async function fetchEducationSection() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/education`, {
    next: {
      revalidate: REVALIDATE_24_HOURS,
    }, //Cache
  });

  let content = await data.json();
  return content?.data || [];
}

export async function fetchGallerySection() {
  const data = await fetch(
    `https://meinhaus.ca/gallery/fetch?per_page=50&service_id=all`,
    {
      next: { revalidate: REVALIDATE_24_HOURS },
    } // Cache
  );

  const content = await data.json();
  const services = content?.data || [];

  // Filtered Images
  const filtered = services
    .map((service) =>
      service?.before?.length > 0 && service?.after?.length > 0 ? service : null
    )
    .filter((service) => service !== null);

  return filtered;
}
