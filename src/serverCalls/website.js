export async function fetchBanners() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/carousal/home`,
      {
        next: { revalidate: 0 }, // Cache for 5 minutes
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
      next: { revalidate: 0 }, // Cache for 5 minutes
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
      next: { revalidate: 0 },
    }
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
        next: { revalidate: 0 }, // Cache for 10 minutes
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
        next: { revalidate: 0 }, // Cache for 10 minutes
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

export async function fetchPrivacyPolicy() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/privacy-policy`,
    {
      next: {
        revalidate: 0,
      },
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
        revalidate: 0,
      },
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
        revalidate: 0,
      },
    }
  );

  let content = await data.json();
  return content?.data?.content;
}

export async function fetchEducationSection() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/education`, {
    next: {
      revalidate: 0,
    },
  });

  let content = await data.json();
  return content?.data || [];
}

export async function fetchGallerySection() {
  const data = await fetch(
    `https://meinhaus.ca/gallery/fetch?per_page=50&service_id=all`,
    {
      next: { revalidate: 0 },
    }
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
