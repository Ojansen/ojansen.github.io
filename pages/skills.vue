<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">My Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="skill-card">
          <div class="skill-icon">
            <font-awesome-icon :icon="['fab', 'html5']" style="color: #ff5722;" />
          </div>
          <h3 class="text-xl font-bold mb-4">HTML</h3>
          <p class="text-gray-700">HTML can significantly improve accessibility by providing a structure and semantics to web pages that can be interpreted by assistive technologies such as screen readers, braille displays, and keyboard-only navigation. By using HTML tags and attributes correctly, web developers can make their content more accessible to people with disabilities and ensure that their websites comply with accessibility standards such as the Web Content Accessibility Guidelines (WCAG).</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">
            <i class="fab fa-css3-alt"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">CSS</h3>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet justo quis tortor gravida, in eleifend magna sodales. Nunc congue eget arcu in feugiat.</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">
            <i class="fab fa-js-square"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">JavaScript</h3>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet justo quis tortor gravida, in eleifend magna sodales. Nunc congue eget arcu in feugiat.</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">
            <i class="fas fa-database"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">SQL</h3>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet justo quis tortor gravida, in eleifend magna sodales. Nunc congue eget arcu in feugiat.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .skill-card {
    background-color: white;
    border-radius: 0.5rem;
    padding: 2rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
  }

  .skill-card:hover {
    transform: translateY(-0.5rem);
  }

  .skill-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .skill-icon i {
    color: #6C63FF;
  }

  @media (min-width: 768px) {
    .skill-card {
      padding: 4rem;
    }
  }
</style>
