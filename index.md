---
layout: default
title: Home
---

# 0xlildoudou

Welcome to my professional blog where I share insights, tutorials, and best practices about cybersecurity and DevOps.

## Latest Posts

<div class="posts-list">
  {% for post in site.posts %}
    <article class="post-card">
      <div class="post-card-content">
        <h2 class="post-card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <div class="post-card-meta">
          <span class="post-date">
            <i class="fas fa-calendar-alt"></i> {{ post.date | date: "%B %-d, %Y" }}
          </span>
          {% if post.author %}
          <span class="post-author">
            <i class="fas fa-user"></i> {{ post.author }}
          </span>
          {% endif %}
          {% if post.tags.size > 0 %}
          <span class="post-tags">
            <i class="fas fa-tags"></i>
            {% for tag in post.tags limit:3 %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </span>
          {% endif %}
        </div>
        <div class="post-card-excerpt">
          {{ post.content | strip_html | truncatewords: 50 }}
        </div>
        <a href="{{ post.url | relative_url }}" class="post-card-readmore">Read More</a>
      </div>
    </article>
  {% endfor %}
</div>