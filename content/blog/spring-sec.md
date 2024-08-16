---
title: Getting Started with Spring Security
description: A comprehensive guide to integrate Spring Security into your Spring Boot applications.
date: 2023-08-16
cover: spring-security.webp
tags:
  - spring security
  - spring boot
  - java
  - security
---

# Strengthening Your Spring Boot Application with Spring Security 🔒

Spring Security is a powerful and highly customizable authentication and access-control framework for Java applications. This guide will walk you through the basics of integrating Spring Security into your Spring Boot project.

## 🛠️ Prerequisites

* **Java Development Kit (JDK):** Ensure you have a compatible JDK installed. You can download it from [Oracle's website](https://www.oracle.com/java/technologies/javase/jdk.html).
* **Spring Boot Project:** Make sure you have a basic Spring Boot application set up. If not, follow the [Spring Boot Setup Guide](https://start.spring.io/) to create one.
* **IDE (Optional):** An Integrated Development Environment (IDE) such as IntelliJ IDEA, Eclipse, or Spring Tool Suite can make development easier.

## 🌱 Adding Spring Security to Your Project

### 1. Dependency Management 📦

First, you need to add Spring Security to your project. If you're using Maven, include the following dependency in your `pom.xml` file:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

For Gradle, add this line to your `build.gradle` file:

```gradle
implementation 'org.springframework.boot:spring-boot-starter-security'
```

### 2. Understanding the Default Configuration ⚙️

Spring Security, when added, automatically applies a basic authentication mechanism. This default setup requires users to authenticate with a generated password that appears in the console log upon startup.

```plaintext
Using generated security password: 3b8e13c2-8c0d-4dcb-bf71-f4d53d7f9ec7
```

To test it, start your Spring Boot application and access `http://localhost:8080` in your browser. You'll be prompted to enter a username (default is `user`) and the generated password.

## 🔐 Customizing Security Configuration

### 1. Creating a Security Configuration Class 📜

To customize the default security settings, create a new class that extends `WebSecurityConfigurerAdapter`:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/home").permitAll() // Allow these paths without authentication
                .anyRequest().authenticated() // Secure all other paths
            .and()
            .formLogin()
                .loginPage("/login") // Custom login page
                .permitAll()
            .and()
            .logout()
                .permitAll();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### 2. Custom Login Page 📝

Create a custom login page by adding an HTML file in `src/main/resources/templates/`:

```html
<!-- login.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="/login">
        <div>
            <label>Username:</label>
            <input type="text" name="username">
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password">
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
</body>
</html>
```

This will replace the default login page with your custom one.

## 🚀 Running Your Secure Application

### 1. Command Line Execution 🖥️

Run your Spring Boot application from the command line:

* **Maven:** `./mvnw spring-boot:run`
* **Gradle:** `./gradlew bootRun`

### 2. Testing Authentication 🔄

Access your application at `http://localhost:8080`. You should see your custom login page. After logging in with valid credentials, you’ll be redirected to the secured part of your application.

## 🌐 Advanced Security Configuration

### 1. Method-Level Security 🧑‍💻

Enable method-level security annotations by adding `@EnableGlobalMethodSecurity` in your configuration class:

```java
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // Your security configuration
}
```

Use annotations like `@PreAuthorize` or `@Secured` on your service methods to enforce security constraints:

```java
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
public class MyService {

    @PreAuthorize("hasRole('ADMIN')")
    public void adminOnlyMethod() {
        // Method accessible only to ADMIN role
    }
}
```

### 2. Custom UserDetailsService 🛡️

Implement `UserDetailsService` to load user-specific data:

```java
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Load user from database or any other source
        // Return a User object
    }
}
```

Inject this service into your `SecurityConfig` class to manage user authentication.

## 🔧 Debugging and Troubleshooting

### 1. Common Issues 🚨

* **403 Forbidden Errors:** Check your security rules in `configure(HttpSecurity http)`. Make sure paths are correctly secured or permitted.
* **Password Encoding Issues:** Ensure that the password encoding in your database matches the encoder defined in your `SecurityConfig`.

### 2. Useful Commands 🔍

* **View Active Security Configurations:** Use `./mvnw spring-boot:run` or `./gradlew bootRun` to view the active security settings in your logs.
* **Change Default Port:** Add `server.port=8081` in `application.properties` to change the default server port.

## 🎉 Conclusion

You've successfully integrated Spring Security into your Spring Boot application, customized its configuration, and implemented a custom login page. This setup ensures that your application is secure, providing a robust foundation for further development.

Happy coding! 🚀
