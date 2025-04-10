<?php
include_once 'DB_connect.php';
class User {
    protected $name;
    protected $email;
    private $role;
    private $password;
    private static $pdo;

    public static function setPDO($pdo) {
        self::$pdo = $pdo;
    }

    public function __construct($name, $email, $role, $password) {
        $this->setName($name);
        $this->setEmail($email);
        $this->setRole($role);
        $this->setPassword($password);
    }

    // Getter en setter voor naam
    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        if (!empty($name)) {
            $this->name = $name;
        } else {
            throw new \Exception("Naam mag niet leeg zijn.");
        }
    }

    // Getter en setter voor email
    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->email = $email;
        } else {
            throw new \Exception("Ongeldig e-mailadres.");
        }
    }

    // Getter en setter voor rol
    public function getRole() {
        return $this->role;
    }

    public function setRole($role) {
        $validRoles = ['admin', 'user'];
        if (in_array($role, $validRoles)) {
            $this->role = $role;
        } else {
            throw new \Exception("Ongeldige rol. Alleen 'admin' of 'user' toegestaan.");
        }
    }

    // Setter voor wachtwoord
    public function setPassword($password) {
        if (!empty($password)) {
            $this->password = password_hash($password, PASSWORD_BCRYPT);
        } else {
            throw new \Exception("Wachtwoord mag niet leeg zijn.");
        }
    }

    // Methode om gebruiker te registreren
    public function register() {
        $stmt = self::$pdo->prepare("INSERT INTO users (name, email, role, password) VALUES (:name, :email, :role, :password)");
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':role', $this->role);
        $stmt->bindParam(':password', $this->password);
        return $stmt->execute();
    }

    // Methode om in te loggen
    public function login() {
        $stmt = self::$pdo->prepare("SELECT * FROM users WHERE email = :email");
        $stmt->bindParam(':email', $this->email);
        $stmt->execute();
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($user && password_verify($this->password, $user['password'])) {
            return true;
        } else {
            return false;
        }
    }
}

?>